import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const ComingSoon = ({ upcomingArray , handleClick}) => {
  return (
    <div className="comingsoon">
      <div className="comingsoon-title">
        <h2>Coming Soon</h2>
        <div className="comingsoon-container flex">
          {/* Upcoming Movies */}
          {upcomingArray.map((movie , index) => (
              <div key={index} className="more-movies" onClick={() => handleClick(movie.id)}>
                <p className="movie-names">{movie.original_title} </p>
                <p className="movie-description">{movie.overview}</p>
              </div>
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
