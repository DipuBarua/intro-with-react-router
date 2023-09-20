import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    const postsStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }
    return (
        <div>
            posts:{posts.length}

            <div style={postsStyle}>
                {posts.map(post => <Post post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;