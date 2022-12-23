import axios from 'axios';
import { useContext, useState } from 'react';
import FileBase from 'react-file-base64';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../../context/Context';
import './write.css';

export default function Write() {
    const { user } = useContext(Context);
    console.log('User is', user.username);
    const [postData, setPostData] = useState({
        title: '',
        desc: '',
        category: '',
        image: '',
        username: user.username,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('postData is=', postData);
        try {
            const res = await axios.post('/api/posts', postData);
            const notify = () => toast.success('Post added');
            notify();
            window.location.replace('/post/' + res.data._id);
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
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            title: e.target.value,
                        })
                    }
                    required
                    minlength="5"
                    maxlength="50"
                />
                <textarea
                    placeholder="Tell your story..."
                    type="text"
                    value={postData.desc}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            desc: e.target.value,
                        })
                    }
                    required
                    minlength="5"
                ></textarea>
                <input
                    type="text"
                    placeholder="Category"
                    autoFocus={true}
                    value={postData.category}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            category: e.target.value,
                        })
                    }
                    required
                    minlength="3"
                />
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                        setPostData({ ...postData, image: base64 })
                    }
                />
                <h5 className="h5">The image must be under 8 MB</h5>
                <button className="button" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}
