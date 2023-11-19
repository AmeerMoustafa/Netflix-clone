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

      {/* TV Features section */}
      <section className="flex feature-parent">
        <div className="flex feature-child">
          <div className="flex-col feature-content-container">
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast , Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="tv-image-container">
            <img className="tv-image" src="./src/assets/loginpage/tv.png" />
            <video
              className="tv-video"
              src="./src/assets/loginpage/tv-video.m4v"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>

      {/* downloads Features section */}
      <section className="flex feature-parent">
        <div className="flex feature-child">
          <div className="download-image-container">
            <img src="./src/assets/loginpage/downloading-image.jpg" />
            <div className="flex download-overlay-container">
              <img src="./src/assets/loginpage/downloads-boxshot.png" />
              <div className="flex-col download-overlay-content">
                <span className="overlay-title">Stranger Things</span>
                <span className="overlay-subtitle">Downloading...</span>
              </div>
              <img src="./src/assets/loginpage/download-icon.gif" />
            </div>
          </div>
          <div className="flex-col downloads-content-container feature-content-container">
            <h2>Download your shows to watch offline</h2>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loginpage;
