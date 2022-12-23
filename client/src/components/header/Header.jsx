import './header.css';
import photo from './stockholm.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">MERN Stack Blog</span>
            </div>
            <img className="headerImg" src={photo} alt="" />
        </div>
    );
}
