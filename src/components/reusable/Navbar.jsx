import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container flex">
        <div className="nav-left flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Neflix logo"></img>
        </div>
        <div className="nav-right flex">
          <span>UNLIMITED TV SHOWS & MOVIES</span>
          <button className="join-btn">Join now</button>
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
