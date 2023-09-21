import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    // react route using navigate
    const postNavigate = useNavigate();

    const postStyle = {
        border: '2px solid blue',
        margin: '20px',
        borderRadius: "10px",
        padding: '10px',
    }

    const handlePostDetails = () => {
        postNavigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`}>show post</Link> */}
            <Link to={`/post/${id}`}><button style={{ background: 'lightblue' }}>Post Details</button></Link>

            <button onClick={handlePostDetails} style={{ background: 'blue', color: 'white' }}>show post details</button>
        </div>
    );
};

export default Post;