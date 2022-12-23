import axios from 'axios';
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../../context/Context';
import './write.css';

export default function Write() {
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('username', user.username);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('category', category);
        try {
            const res = await axios.post('/api/posts', formData);
            const notify = () => toast.success('Post added');
            notify();
            window.location = '/post/' + res.data._id;
        } catch (err) {
            const notify = () => toast('Could not add post!', { icon: '📞' });
            notify();
            console.log('Error occurred', err.message);
        }
    };
    return (
        <div
            className="row"
            css={{
                marginBottom: '25px',
            }}
        >
            <Toaster />
            <span className="writeTitle">Write</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    minlength="5"
                    maxlength="50"
                />
                <textarea
                    placeholder="Tell your story..."
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                    minlength="5"
                ></textarea>
                <input
                    type="text"
                    placeholder="Category"
                    autoFocus={true}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    minlength="3"
                />
                <h5>Add an Image (jpg/jpeg/png/webp)</h5>
                <input
                    type="file"
                    name="image"
                    id="fileInput"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="button" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}
