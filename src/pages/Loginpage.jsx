import "../styles/utilities.css";
import "../styles/loginpage.css";
import Signup from "../components/loginpage/Signup";
import LoginNav from "../components/loginpage/LoginNav";

function Loginpage() {
  return (
    <>
      {/* Hero section */}
      <section className="flex-col hero-parent">
        <LoginNav />
        <div className="flex-col hero-content-container">
          <h1>Unlimited Movies, TV shows, and more</h1>
          <span>Watch anywhere. Cancel anytime.</span>

          <div className="flex-col hero-signup-container">
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>

            <Signup />
          </div>
        </div>
      </section>

      {/* Features section */}

      <section className="tv-feature-parent">
        <div className="tv-feature-child"></div>
      </section>
    </>
  );
}

export default Loginpage;
