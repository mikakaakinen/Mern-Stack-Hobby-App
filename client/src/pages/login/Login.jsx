import axios from 'axios';
import { useContext, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/api/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            const notify = () => toast.success('Login success!');
            notify();
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        } catch (err) {
            const notify = () => toast('Wrong credentials!', { icon: '📞' });
            notify();
            console.log('Error occurred', err.message);
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    };

    return (
        <div className="login">
            <Toaster />
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                    required
                    minlength="3"
                    maxlength="15"
                />
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                    required
                    minlength="4"
                    maxlength="15"
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
