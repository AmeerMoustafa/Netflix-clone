import "../../styles/utilities.css";
import "../../styles/reusablecomponents/slider.css";

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card flex-col">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt="Movie image"
        />
        <p className="movie-title">{movie.original_title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
