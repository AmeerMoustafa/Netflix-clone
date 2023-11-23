import { useEffect, useState } from "react";
import "../../styles/reusablecomponents/slider.css";
import "../../styles/utilities.css";
import MovieCard from "./MovieCard";

const Slider = ({ movie_array, title }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(20);
  const [totalMoviesShown, setTotalMoviesShown] = useState(movie_array.length);

  const onSliderClicked = (direction) => {
    if (direction === "left" && sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    } else if (direction === "right" && sliderIndex < totalMoviesShown - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  useEffect(() => {
    const onWidthChange = () => {
      const newScreenWidth = window.innerWidth;
      let newTotalMoviesShown = 0;
      let newSliderWidth = 0;
      switch (true) {
        case newScreenWidth >= 1700:
          setSliderIndex(0);
          newSliderWidth = 100;
          newTotalMoviesShown = 4;
          break;
        case newScreenWidth > 1200:
          setSliderIndex(0);
          newSliderWidth = 80;
          newTotalMoviesShown = 5;
          break;
        case newScreenWidth > 960:
          setSliderIndex(0);
          newSliderWidth = 60;
          newTotalMoviesShown = 7;
          break;
        case newScreenWidth > 480:
          setSliderIndex(0);
          newSliderWidth = 40;
          newTotalMoviesShown = 10;
          break;
        default:
          setSliderIndex(0);
          newSliderWidth = 20;
          newTotalMoviesShown = movie_array.length;
          break;
      }
      setScreenWidth(newSliderWidth);
      setTotalMoviesShown(newTotalMoviesShown);
    };

    onWidthChange();
    window.addEventListener("resize", onWidthChange);
  }, []);

  const sliderStyle = {
    transform: `translateX(calc(${sliderIndex * -screenWidth}%))`,
    transition: "transform 0.4s ease-in-out",
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="movies-slider-container flex">
        <div
          className="slider-action left flex"
          onClick={() => onSliderClicked("left")}>
          <img src="/assets/selectionpage/arrow-left.svg" alt="Left Arrow" />
        </div>
        <div className="slider-container flex" style={sliderStyle}>
          {movie_array.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div
          className="slider-action right flex"
          onClick={() => onSliderClicked("right")}>
          <img src="/assets/selectionpage/arrow-right.svg" alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
