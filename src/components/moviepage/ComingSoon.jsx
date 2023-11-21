import "../../styles/utilities.css";
import "../../styles/moviepage.css";
import { Link } from "react-router-dom";
import {refreshPage} from "../../core/utilities"

const ComingSoon = ({ upcomingArray }) => {
  return (
    <div className="comingsoon">
      <div className="comingsoon-title">
        <h2>Coming Soon</h2>
        <div className="comingsoon-container flex">
          {/* Upcoming Movies */}
          {upcomingArray.map((movie) => (
            <Link to={`/movie/${movie.id}`} className="link">
              <div className="more-movies">
                <p className="movie-names">{movie.original_title}</p>
                <p className="movie-description">{movie.overview}</p>
              </div>
            </Link>
          ))}
          <p className="tudum-promote">
            Go behind the scenes of Netflix TV shows and movies, see what's
            coming soon and watch bonus videos on Tudum.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
