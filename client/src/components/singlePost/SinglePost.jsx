import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import Landscape from './landscape.jpg';
import './singlePost.css';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/api/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${post._id}`, {
                data: { username: user.username },
            });
            const notify = () => toast.success('Post deleted');
            notify();
            window.location.replace('/');
        } catch (err) {
            const notify = () =>
                toast('Could not delete post!', { icon: '📞' });
            notify();
        }
    };

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('username', user.username);
        formData.append('title', title);
        formData.append('desc', desc);
        try {
            await axios.put(`/api/posts/${post._id}`, formData);
            const notify = () => toast.success('Post updated');
            notify();
            setUpdateMode(false);
            window.history.go();
        } catch (err) {
            const notify = () =>
                toast('Could not update post!', { icon: '📞' });
            notify();
            console.log('Error occurred', err.message);
        }
    };

    return (
        <div className="singlePost">
            <Toaster />
            <div className="singlePostWrapper">
                <img
                    src={
                        post.picture === '' ? `${Landscape}` : `${post.picture}`
                    }
                    alt=""
                    className="singlePostImg"
                />
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon far fa-edit"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="singlePostIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b> {post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <>
                        <textarea
                            className="singlePostDescInput"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <input
                            type="file"
                            name="image"
                            id="fileInput"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="singlePostFileInput"
                        />
                        <h5>Updating post takes some time...</h5>
                    </>
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
