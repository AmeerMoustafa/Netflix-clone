import "../../styles/utilities.css";
import "../../styles/reusablecomponents/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-container flex">
        <div className="nav-left flex">
          <Link to="/Movies">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Neflix logo"
            ></img>
          </Link>
        </div>
        <div className="nav-right flex">
          <span>UNLIMITED TV SHOWS & MOVIES</span>
          <Link to="/Movies">
            <button className="join-btn">Join now</button>
            <button className="signin-btn">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
