import "../styles/utilities.css";
import "../styles/selectionpage.css";

import Footer from "../components/reusable/Footer";
import Navbar from "../components/reusable/Navbar";
import Slider from "../components/reusable/Slider";
import { useEffect, useState } from "react";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFjZGY1YmYzNTdjMTJjMzNmMGRkNTc1MDU4YTI1YyIsInN1YiI6IjY1NThmM2U4YjU0MDAyMTRjZjM5ZjEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRAJBNXxK0rODxMyrd9a7IxiyJonE0jpKGUPC6MbrSw";
const popularMoviesLink =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: apiKey,
  },
};

const SelectionPage = () => {
  const [popularArray, setPopularArray] = useState([]);
  const [actionArray, setActionArray] = useState([]);
  const [romanticArray, setRomanticArray] = useState([]);
  const [comedyArray, setComedyArray] = useState([]);
  const [hollywoodArray, setHollywoodArray] = useState([]);
  const [actionAndAdv, setActionAndAdv] = useState([]);
  const [familyArray, setFamilyArray] = useState([]);
  const [horrorArray, setHorrorArray] = useState([]);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(popularMoviesLink, options);
      const data = await response.json();
      setPopularArray(data.results);
    } catch (err) {
      console.error(
        "Error getting popular movies from API, check your connection and try again later"
      );
    }
  };

  const getHollywoodMovies = async () => {
    try {
      const getMovieByGenreURL =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=US";
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setHollywoodArray(data.results);
    } catch (err) {
      console.error(
        "Error getting comedy movies from API, check your connection and try again later"
      );
    }
  };

  const getActionAndAdventureMovies = async () => {
    try {
      const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${[
        12, 28,
      ]}`;
      const response = await fetch(getMoviByGenreURL, options);
      const data = await response.json();
      setActionAndAdv(data.results);
    } catch (err) {
      console.error(
        "Error getting action and adventure movies from API, check your connection and try again later"
      );
    }
  };

  const getMovieByGenre = async (genreID) => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}`;
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setArray(data.results, genreID);
    } catch (err) {
      console.error(
        "Error getting horror movies from API, please check your connection and try again later"
      );
    }
  };

  const setArray = (data, genreID) => {
    switch (genreID) {
      case 28:
        setActionArray(data);
        break;
      case 10749:
        setRomanticArray(data);
        break;
      case 35:
        setComedyArray(data);
        break;
      case [12, 28]:
        setActionAndAdv(data);
        break;
      case 10751:
        setFamilyArray(data);
        break;
      case 27:
        setHorrorArray(data);
        break;
    }
  };

  const callAPI = async () => {
    await getPopularMovies(); // Popular Movies
    await getMovieByGenre(28); // action Movies
    await getMovieByGenre(10749); // Romantic Movie
    await getMovieByGenre(35); // Comedy Movies
    await getActionAndAdventureMovies(); // Action + Adventure Movies
    await getMovieByGenre(10751); // Family Movies
    await getMovieByGenre(27); // Horro Movies
    await getHollywoodMovies(); // Hollywood Movies
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="body-container">
        <div className="title-section">
          <div className="title">Movies</div>
          <div className="description">
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </div>
        </div>

        <Slider movie_array={popularArray} title="Popular On Netflix" />
        <Slider movie_array={actionArray} title="Action Movies" />
        <Slider movie_array={romanticArray} title="Romantic Movies" />
        <Slider movie_array={comedyArray} title="Comedy Movies" />
        <Slider movie_array={actionAndAdv} title="Action & Adventure Movies" />
        <Slider movie_array={familyArray} title="Family Movies" />
        <Slider movie_array={horrorArray} title="Horror Movies" />
        <Slider movie_array={hollywoodArray} title="Hollywood Movies" />

        <div className="blurred-sliders">
          <div className="blurred"></div>
          <Slider movie_array={popularArray} />
          <Slider movie_array={actionArray} />
        </div>

        <div className="bottom-container">
          <h2>There’s even more to watch.</h2>
          <br />
          <div>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </div>
          <button className="bottom-btn">JOIN NOW</button>
        </div>

        <div className="read-more-link">
          <a
            href="https://www.netflix.com/tudum"
            target="_blank"
            className="read-more-link">
            Read about Netflix TV shows and movies and watch bonus videos on
            Tudum.com.
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SelectionPage;
