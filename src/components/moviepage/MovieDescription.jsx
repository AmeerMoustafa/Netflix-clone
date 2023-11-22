import "../../styles/utilities.css";
import "../../styles/moviepage.css";
import { getMovieDuration } from "../../core/utilities";

const MovieDescription = ({ movie, casts }) => {
  const checkBackdropPath = movie.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    : "url(../../../../noImage.jpg)";
  const checkPosterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "../../../../noImage.jpg";

  const changeBackground = {
    backgroundImage: `${checkBackdropPath}`,
  };
  return (
    <div className="moviedescription">
      <div className="hero flex" style={changeBackground}>
        <div className="hero-container flex-col">
          <div className="hero-details">
            <img
              src={checkPosterPath}
              alt="Movie Logo"
            />
            <h2 className="hero-title">{movie.original_title}</h2>
            <p className="hero-info grey">
              {movie.release_date} |{" "}
              {movie.adult ? '<span className="hero-maturity"></span> |' : ""}{" "}
              {getMovieDuration(movie.runtime)} | Thrillers
            </p>
            <p className="hero-description">{movie.overview}</p>

            {/* Get Popular Actors */}
            <p className="hero-starring">
              <span className="grey">Starring: </span>
              {casts.map((cast) =>
                cast.known_for_department == "Acting" ? `${cast.name} , ` : ""
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="hero-nav flex">
        <div className="hero-nav-left flex">
          <img
            src="../../../../netflix-logo.png"
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
