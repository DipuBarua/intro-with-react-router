import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const postStyle = {
        border: '2px solid blue',
        margin: '20px',
        borderRadius: "10px",
        padding: '10px',
    }

    return (
        <div style={postStyle}>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`}>show post</Link> */}
            <Link to={`/post/${id}`}><button style={{ backgroundColor: 'lightblue' }}>Post Details</button></Link>
        </div>
    );
};

export default Post;