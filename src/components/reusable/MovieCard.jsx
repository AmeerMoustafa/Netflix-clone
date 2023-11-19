import "../../styles/utilities.css";
import "../../styles/reusablecomponents/slider.css";

const MovieCard = () => {
  return (
    <div className="movie-card flex-col">
      <img
        src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
        alt="Movie image"
      />
      <p className="movie-title">Movie title</p>
    </div>
  );
};

export default MovieCard;
