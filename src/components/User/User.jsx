import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({ user }) => {
    const { id, name, phone, username, website, email } = user;

    const userStyle = {
        border: '2px solid yellowgreen',
        margin: '20px',
        borderRadius: "10px",
        padding: '10px'
    }

    const detailStyle = {
        backgroundColor: 'orange',
        padding: '2px',
        borderRadius: '5px',
    }
    return (
        <div style={userStyle}>
            <p>{username}:</p>
            <h3>Name: {name}</h3>
            <p>phone: {phone}</p>
            <b>email: {email}</b> <br />
            <b>website: {website}</b>
            <p style={detailStyle}>
                <Link to={`/user/${id}`}>Show Details</Link>
                <Link to={`/user/${id}`}>
                    <button>click me</button>
                </Link>
            </p>

        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
};
export default User;