import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body } = postDetails;
    return (
        <div>
            <h3>Details of the post:{id}</h3>
            <p>title:{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;