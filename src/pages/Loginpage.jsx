import "../styles/utilities.css";
import "../styles/loginpage.css";
import Signup from "../components/loginpage/Signup";
import LoginNav from "../components/loginpage/LoginNav";
import Accordion from "../components/loginpage/Accordion";
import Footer from "../components/reusable/Footer";

const Loginpage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="flex-col hero-parent">
        <LoginNav />
        <div className="flex-col hero-content-container">
          <h1>Unlimited Movies, TV shows, and more</h1>
          <span>Watch anywhere. Cancel anytime.</span>

          <Signup />
        </div>
      </section>

      {/* Features section */}

      {/* TV Features section */}
      <section className="flex parent-container">
        <div className="flex child-container">
          <div className="flex-col feature-content-container">
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast , Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="tv-image-container">
            <img className="tv-image" src="/assets/loginpage/tv.png" />
            <video
              className="tv-video"
              src="/assets/loginpage/tv-video.m4v"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>

      {/* downloads Features section */}
      <section className="flex parent-container">
        <div className="flex downloads-child-container child-container">
          <div className="download-image-container">
            <img src="/assets/loginpage/downloading-image.jpg" />
            <div className="flex download-overlay-container">
              <img src="/assets/loginpage/downloads-boxshot.png" />
              <div className="flex-col download-overlay-content">
                <span className="overlay-title">Stranger Things</span>
                <span className="overlay-subtitle">Downloading...</span>
              </div>
              <img src="/assets/loginpage/download-icon.gif" />
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

      {/* watch everywhere section */}

      <section className="flex parent-container">
        <div className="flex child-container">
          <div className="flex-col feature-content-container">
            <h2>Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          <div className="watch-image-container">
            <img src="/assets/loginpage/device-pile.png" />
            <video
              className="watch-video"
              src="/assets/loginpage/watch-everywhere.m4v"
              autoPlay
              loop
            />
          </div>
        </div>
      </section>

      {/* kids section */}
      <section className="flex parent-container">
        <div className="flex kids-section-child child-container">
          <img src="/assets/loginpage/kids-image.png" />
          <div className="flex-col feature-content-container">
            <h2>Create profiles for kids</h2>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ section */}

      <section className="flex parent-container">
        <div className="flex-col faq-child-container child-container">
          <h2>Frequently Asked Questions</h2>

          <Accordion />

          <Signup />
        </div>
      </section>

      <section className="parent-container">
        <Footer />
      </section>
    </>
  );
};

export default Loginpage;
