import "../../styles/reusablecomponents/slider.css";
import "../../styles/utilities.css";
import MovieCard from "./MovieCard";
import Movie from "./MovieCard";

const Slider = ({ title }) => {
  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="movies-slider-container flex">
        <div className="slider-container flex" id="slider">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Slider;
