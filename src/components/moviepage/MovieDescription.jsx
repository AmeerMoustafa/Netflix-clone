import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const MovieDescription = ({ movie }) => {
  const changeBackground = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
  };
  return (
    <div className="moviedescription">
      <div className="hero flex" style={changeBackground}>
        <div className="hero-container flex-col">
          <div className="hero-details">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Movie Logo"
            />
            <h2 className="hero-title">{movie.original_title}</h2>
            <p className="hero-info grey">
              1983 | <span className="hero-maturity">18+</span> | 2h 49m |
              Thrillers
            </p>
            <p className="hero-description">{movie.overview}</p>
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
