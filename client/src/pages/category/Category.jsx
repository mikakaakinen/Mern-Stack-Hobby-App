import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './category.css';

export default function Category() {
    const [categoryData, setCategoryData] = useState({
        name: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/categories', categoryData);
            const notify = () => toast.success('Category added!');
            notify();
        } catch (err) {
            const notify = () => toast('An error occurrred!', { icon: '📞' });
            notify();
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
            <span className="loginTitle">Add category</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category"
                    autoFocus={true}
                    value={categoryData.name}
                    onChange={(e) =>
                        setCategoryData({
                            name: e.target.value,
                        })
                    }
                />
                <button className="button" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}
