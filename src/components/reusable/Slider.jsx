import { useState } from "react";
import "../../styles/reusablecomponents/slider.css";
import "../../styles/utilities.css";
import MovieCard from "./MovieCard";

const Slider = ({ arr, title }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onSliderClicked = (direction) => {
    if (direction === "left" && sliderIndex > 0) {
      setSliderIndex((prevIndex) => prevIndex - 1);
    } else if (direction === "right") {
      setSliderIndex((prevIndex) => prevIndex + 1);
    }
  };

  const sliderStyle = {
    transform: `translateX(calc(${sliderIndex * -100}%))`,
    transition: "transform 250ms ease-in-out",
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="movies-slider-container flex">
        <div
          className="slider-action left flex"
          onClick={() => onSliderClicked("left")}
        ></div>
        <div className="slider-container flex" style={sliderStyle}>
          {arr.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        <div
          className="slider-action right flex"
          onClick={() => onSliderClicked("right")}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
