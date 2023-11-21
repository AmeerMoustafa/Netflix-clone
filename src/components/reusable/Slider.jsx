import { useEffect, useState } from "react";
import "../../styles/reusablecomponents/slider.css";
import "../../styles/utilities.css";
import MovieCard from "./MovieCard";

const Slider = ({ movie_array, title }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderItemWidth = 20;

  const onSliderClicked = (direction) => {
    const totalMoviesShown = Math.ceil(100 / sliderItemWidth);
    if (direction === "left" && sliderIndex > 0) {
      setSliderIndex((prevIndex) => prevIndex - 1);
    } else if (
      direction === "right" &&
      sliderIndex < movie_array.length / totalMoviesShown - 1
    ) {
      setSliderIndex((prevIndex) => prevIndex + 1);
    }
  };

  const sliderStyle = {
    transform: `translateX(calc(${sliderIndex * -100}%))`,
    transition: "transform 0.4s ease-in-out",
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="movies-slider-container flex">
        <div
          className="slider-action left flex"
          onClick={() => onSliderClicked("left")}>
          <img
            src="./src/assets/selectionpage/arrow-left.svg"
            alt="Left Arrow"
          />
        </div>
        <div className="slider-container flex" style={sliderStyle}>
          {movie_array.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div
          className="slider-action right flex"
          onClick={() => onSliderClicked("right")}>
          <img
            src="./src/assets/selectionpage/arrow-right.svg"
            alt="Right Arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
