import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, phone } = user;
    return (
        <div>
            <h2>show details</h2>
            <p>User: {name}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;