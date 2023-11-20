import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const MovieDescription = () => {
  return (
    <div className="moviedescription">
      <div className="hero flex">
        <div className="hero-container flex-col">
          <div className="hero-details">
            <img src="src\assets\moviepage\hero-logo.png" alt="Movie Logo" />
            <h2 className="hero-title">Scarface</h2>
            <p className="hero-info grey">
              1983 | <span className="hero-maturity">18+</span> | 2h 49m |
              Thrillers
            </p>
            <p className="hero-description">
              In a ruthless rise to Miami drug lord, a Cuban-born gangster
              descends into addiction, obsession and brutality, with grisly
              consequences.
            </p>
            <p className="hero-starring">
              <span className="grey">Starring: </span> Al Pacino, Steven Bauer,
              Michelle Pfeiffer
            </p>
          </div>
        </div>
      </div>
      <div className="hero-nav flex">
        <div className="hero-nav-left flex">
          <img
            src="src\assets\moviepage\netflix-logo.png"
            alt="Netflix logo"
            className="img"
          />
          <span>Watch all you want</span>
        </div>
        <div className="hero-nav-right">
          <button className="join-btn">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
