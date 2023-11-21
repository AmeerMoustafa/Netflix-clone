import "../../styles/utilities.css";
import "../../styles/moviepage.css";
import { Link } from "react-router-dom";

const MoreLikeThis = ({recomArray}) => {
  return (
    <div className="morelikethis">
      <div className="morelikethis-title">
        <h2>More Like This</h2>
        <div className="morelikethis-container flex">
          {recomArray.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;
