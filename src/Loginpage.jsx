import "../src/styles/utilities.css";
import "../src/styles/loginpage.css";

function Loginpage() {
  return (
    <div className="flex-col hero-parent">
      <nav className="flex navbar-parent">
        <div className="navbar-logo-container">
          <img src="../src/assets/loginpage/netflixlogo.svg" />
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </nav>
    </div>
  );
}

export default Loginpage;
