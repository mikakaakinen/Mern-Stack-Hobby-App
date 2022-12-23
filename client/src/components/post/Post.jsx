import { Link } from 'react-router-dom';
import Landscape from './landscape.jpg';
import './post.css';

export default function Post({ post }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={post.picture === '' ? `${Landscape}` : `${post.picture}`}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">{post.category}</span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    );
}
