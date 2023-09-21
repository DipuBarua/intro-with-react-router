import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <h3>Navbar</h3>
                {/* Link is a better version than anchor */}
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to={`/about`}>About</NavLink>
                <Link to={`/contact`}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;