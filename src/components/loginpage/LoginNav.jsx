import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <nav className="flex navbar-parent">
      <div className="navbar-logo-container">
        <img src="/assets/loginpage/netflixlogo.svg" />
      </div>
      <div className="flex navbar-signin-container">
        <select>
          <option>English</option>
          <option>العربية</option>
        </select>
        <Link to="/Movies">
          <button>Sign in</button>
        </Link>
      </div>
    </nav>
  );
};

export default LoginNav;
