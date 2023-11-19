import "../src/styles/utilities.css";
import "../src/styles/loginpage.css";

function Loginpage() {
  return (
    <div className="flex-col hero-parent">
      <nav className="flex navbar-parent">
        <div className="navbar-logo-container">
          <img src="../src/assets/loginpage/netflixlogo.svg" />
        </div>
        <div className="flex navbar-signin-container">
          <select>
            <option>English</option>
            <option>العربية</option>
          </select>
          <button>Sign in</button>
        </div>
      </nav>

      <div className="flex-col hero-content-container">
        <h1>Unlimited Movies, TV shows, and more</h1>
        <span>Watch anywhere. Cancel anytime.</span>

        <div className="hero-signup-container">
          <span>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>

          <div className="flex hero-form-container">
            <input type="text" />
            <button>{"Get Started >"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
