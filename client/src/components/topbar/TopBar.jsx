import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import Developer from './developer.png';
import './topbar.css';

export default function TopBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };
    return (
        <div className="top">
            <a href="https://www.facebook.com/mika.kaakinen.7?ref=br_rs">
                <i className="topIcon fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/MikaKaakinen">
                <i className="topIcon fab fa-twitter-square"></i>
            </a>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">
                        HOME
                    </Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">
                        ABOUT
                    </Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">
                        CONTACT
                    </Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">
                        WRITE
                    </Link>
                </li>
                {user && (
                    <li className="topListItem">
                        <Link className="link" to="/category">
                            ADD CATEGORY
                        </Link>
                    </li>
                )}
                <li className="logOut" onClick={handleLogout}>
                    {user && 'LOGOUT'}
                </li>
            </ul>
            {!user ? (
                <ul className="topList" style={{ display: 'inline' }}>
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">
                            REGISTER
                        </Link>
                    </li>
                </ul>
            ) : (
                <Link to="/settings">
                    <img
                        className="topImg"
                        src={Developer}
                        alt="profilePic"
                        style={{ display: 'inline' }}
                    />
                </Link>
            )}
        </div>
    );
}
