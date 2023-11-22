import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const MoreLikeThis = ({ recomArray, handleClick }) => {
  return (
    <div className="morelikethis">
      <div className="morelikethis-title">
        <h2>More Like This</h2>
        <div className="morelikethis-container flex">
          {recomArray.length !== 0 ? (
            recomArray.map((movie, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                onClick={() => {
                  handleClick(movie.id);
                }}
              />
            ))
          ) : (
            <div className="red">No Recommended Movies</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;
