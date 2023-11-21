import "../../styles/utilities.css";
import "../../styles/moviepage.css";
import { Link } from "react-router-dom";

const MoreLikeThis = ({recomArray , handleClick}) => {
  return (
    <div className="morelikethis">
      <div className="morelikethis-title">
        <h2>More Like This</h2>
        <div className="morelikethis-container flex">
          {recomArray.map((movie) => (
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onClick={() => {handleClick(movie.id)}}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;
