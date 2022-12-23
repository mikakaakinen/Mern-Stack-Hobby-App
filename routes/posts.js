const router = require('express').Router();
const Post = require('../models/Post');
const cloudinary = require('cloudinary');
const multer = require('multer');
require('dotenv').config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
            return cb(new Error('file is not allowed'));
        }

        cb(null, true);
    },
});

//CREATE POST
router.post('/', upload.single('image'), async (req, res, next) => {
    try {
        // Upload image to cloudinary
        let result;
        if (req.file) {
            result = await cloudinary.uploader.upload(req.file.path);
        }
        // Create new review
        let post = new Post({
            username: req.body.username,
            title: req.body.title,
            desc: req.body.desc,
            category: req.body.category,
            picture:
                result?.secure_url || process.env.CLOUDINARY_PLACEHOLDER_URL,
            cloudinary_id:
                result?.public_id ||
                process.env.CLOUDINARY_PLACEHOLDER_PUBLIC_ID,
        });
        // Save user
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log('Could not create a post', err);
    }
});

//UPDATE A POST
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinary_id);
            // Upload image to cloudinary
            let result;
            if (req.file) {
                result = await cloudinary.uploader.upload(req.file.path);
            }
            const data = {
                title: req.body.title || post.title,
                desc: req.body.desc || post.desc,
                picture: result?.secure_url || post.picture,
                cloudinary_id: result?.public_id || review.cloudinary_id,
            };
            await Post.findByIdAndUpdate(req.params.id, data, { new: true });
            res.json('Post updated!');
        } else {
            res.status(401).json('You can update only your post!');
        }
    } catch (err) {
        res.status(404).json('Post not found');
    }
});

//DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                // Delete image from cloudinary
                await cloudinary.uploader.destroy(post.cloudinary_id);
                // Delete review from db
                await post.delete();
                res.status(200).json('Post has been deleted...');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can delete only your post!');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                category: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
