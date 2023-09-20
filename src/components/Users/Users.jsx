import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    // when we have to get data at the time of using a react router then we can use useLoaderData instead of useEffect.
    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h1>Our Users: {users.length}</h1>
            <h2>Welcome Our All Users</h2>
            <p>This is fantastic user community</p>
            <div className="usersStyle">
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;