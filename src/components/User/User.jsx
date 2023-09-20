
const User = ({ user }) => {
    const {id, name, phone, username, website, email } = user;

    const userStyle = {
        border: '2px solid yellowgreen',
        margin: '20px',
        borderRadius: "10px",
        padding: '10px'
    }
    return (
        <div style={userStyle}>
            <p>{username}:</p>
            <h3>Name: {name}</h3>
            <p>phone: {phone}</p>
            <b>email: {email}</b> <br />
            <b>website: {website}</b>
        </div>
    );
};

export default User;