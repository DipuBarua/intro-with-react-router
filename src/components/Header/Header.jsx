import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <h3>Navbar</h3>
                {/* Link is a better version than anchor */}
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/contact`}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;