import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body } = postDetails;
    // params hook used
    const { postId } = useParams();
    console.log(postId);

    const backNavigate = useNavigate();
    const handleBack = () => {
        // backNavigate(`/posts`);
        backNavigate(-1);
    }
    return (
        <div>
            <h3>Details of the post:{id}</h3>
            <p>title:{title}</p>
            <p>{body}</p>

            <button onClick={handleBack} style={{ background: 'black', color: 'white' }}>go back</button>
        </div>
    );
};

export default PostDetails;