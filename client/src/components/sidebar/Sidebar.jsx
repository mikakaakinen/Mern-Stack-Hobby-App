import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import photo from './koli.jpg';
import './sidebar.css';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/api/categories');
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={photo}
                    className="sidebarImg"
                    alt="Koli"
                    width="250px"
                    height="auto"
                />
                <p className="sidebarText">
                    I am a curious person who has a wide array of interest, for
                    example traveling mostly domestically. Here I am seen at
                    Koli hill in Eastern Finland. Koli is the most iconic
                    Finnish landscape.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/mika.kaakinen.7?ref=br_rs">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/MikaKaakinen">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
