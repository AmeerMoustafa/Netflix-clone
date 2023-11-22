import "../../styles/utilities.css";
import "../../styles/moviepage.css";
import Castlist from "./castlist";

const MoreDetails = ({ movie, casts, allcasts }) => {
  const c = allcasts.slice(0, 16);
  console.log(movie.genres);

  console.log(c);
  return (
    <div className="moredetails">
      <div className="small-description">
        <div className="hr"></div>
        <p>
          Al Pacino stars in this crime epic from director Brian De Palma and
          <br />
          screenwriter Oliver Stone.
        </p>
        <div className="hr"></div>
      </div>
      <div className="details-title">
        <h2>More Details</h2>
      </div>
      <br></br>
      <div className="details-row flex">
        <div className="watchoffline details-part">
          <div className="sub-title">Watch offline</div>
          <p>Download and watch everywhere you go.</p>
        </div>

        <div className="genres details-part">
          <div className="sub-title">genres</div>
          <div className="genres-container">
            {movie.genres?.map((genre, index) => (
              <p key={index}>
                {genre.name} {index < movie.genres.length - 1 && ","}
              </p>
            ))}
          </div>
        </div>

        <div className="movietype details-part">
          <div className="sub-title">this movie is</div>
          <p></p>
        </div>
      </div>
      <br></br>
      <div className="details-row">
        <div className="sub-title">cast</div>

        <div className="cast-conatiner flex"></div>
        <Castlist cast={c}></Castlist>
      </div>
    </div>
  );
};

export default MoreDetails;
