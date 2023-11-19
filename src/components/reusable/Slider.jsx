import "../../styles/reusablecomponents/slider.css";
import "../../styles/utilities.css";

const Slider = ({ title }) => {
  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="movies-slider-container flex">
        <div className="slider-container" id="slider">
          <div className="movie-card flex-col">
            <img
              src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
              alt="Movie image"
            />
            <p className="movie-title">Movie title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
