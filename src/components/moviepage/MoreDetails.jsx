import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const MoreDetails = ({ movie }) => {
  return (
    <div className="moredetails">
      <div className="small-description">
        <div className="hr"></div>
        <p>{movie.tagline}</p>
        <div className="hr"></div>
      </div>
      <div className="details-title">
        <h2>More Details</h2>
      </div>
      <div className="details-container flex">
        <div className="details-row1 flex">
          <div className="watchoffline"></div>
          <div className="genres"></div>
          <div className="movietype"></div>
          <div className="audio"></div>
          <div className="subtitles"></div>
        </div>
        <div className="details-row2 flex-col"></div>
      </div>
    </div>
  );
};

export default MoreDetails;
