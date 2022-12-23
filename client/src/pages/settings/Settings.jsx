import axios from 'axios';
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './settings.css';

export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const [userData, setUserData] = useState({
        userId: user._id,
        username: '',
        email: '',
        password: '',
        profilePic: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_START' });
        try {
            const res = await axios.put(
                'http://localhost:5000/api/users/' + user._id,
                userData
            );
            const notify = () => toast.success('Profile updated!');
            notify();
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
        } catch (err) {
            const notify = () =>
                toast('Profile update failed!', { icon: '📞' });
            notify();
            console.log('Error occurred', err.message);
            dispatch({ type: 'UPDATE_FAILURE' });
        }
    };

    const deleteAccount = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('/api/users/' + user._id);
            const notify = () => toast.success('Account deleted!');
            notify();
        } catch (err) {
            const notify = () =>
                toast(<h3>Error! {err.response.data.msg}</h3>, { icon: '📞' });
            notify();
            console.log('Error occurred', err);
        }
    };

    return (
        <div className="settings">
            <Toaster />
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span
                        className="settingsDeleteTitle"
                        onClick={deleteAccount}
                    >
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        value={userData.username}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                username: e.target.value,
                            })
                        }
                        required
                        minlength="3"
                        maxlength="15"
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                email: e.target.value,
                            })
                        }
                        required
                        minlength="8"
                        maxlength="30"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder={user.password}
                        value={userData.password}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            })
                        }
                        required
                        minlength="4"
                        maxlength="15"
                    />
                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
