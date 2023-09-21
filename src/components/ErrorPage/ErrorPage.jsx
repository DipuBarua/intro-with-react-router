import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>go back home</p>
                    <Link style={{ background: 'black', padding: '2px' }} to={`/`}>Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;