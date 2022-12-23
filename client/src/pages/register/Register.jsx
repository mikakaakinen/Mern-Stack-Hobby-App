import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', {
                username,
                email,
                password,
            });
            const notify = () => toast.success('Register success!');
            notify();
            res.data && window.location.replace('/login');
        } catch (err) {
            const notify = () => toast('Register failed!', { icon: '📞' });
            notify();
            console.log('Error occurred', err.message);
        }
    };
    return (
        <div className="register">
            <Toaster />
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minlength="3"
                    maxlength="15"
                />
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    minlength="8"
                    maxlength="30"
                />
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minlength="4"
                    maxlength="15"
                />
                <button className="registerButton" type="submit">
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Login
                </Link>
            </button>
        </div>
    );
}
