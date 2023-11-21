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
const getGenresLink =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

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

  const getActionMovies = async () => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=28`;
      const results = await fetch(getMovieByGenreURL, options);
      const data = await results.json();
      setActionArray(data.results);
    } catch (err) {
      console.error(
        "Error getting action movies from API, check your connection and try again later"
      );
    }
  };

  const getRomanticMovies = async () => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=10749`;
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setRomanticArray(data.results);
    } catch (err) {
      console.error(
        "Error getting romantic movies from API, check your connection and try again later"
      );
    }
  };

  const getComedyMovies = async () => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=35`;
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setComedyArray(data.results);
    } catch (err) {
      console.error(
        "Error getting comedy movies from API, check your connection and try again later"
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

  const getFamilyMovies = async () => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=10751`;
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setFamilyArray(data.results);
    } catch (err) {
      console.error(
        "Error getting family movies from API, please check your connection and try again later"
      );
    }
  };

  const getHorrorMovies = async () => {
    try {
      const getMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=27`;
      const response = await fetch(getMovieByGenreURL, options);
      const data = await response.json();
      setHorrorArray(data.results);
    } catch (err) {
      console.error(
        "Error getting horror movies from API, please check your connection and try again later"
      );
    }
  };

  useEffect(() => {
    getPopularMovies();
    getRomanticMovies();
    getComedyMovies();
    getActionMovies();
    getHollywoodMovies();
    getActionAndAdventureMovies();
    getFamilyMovies();
    getHorrorMovies();
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

        <Slider arr={popularArray} title="Popular On Netflix" />
        <Slider arr={actionArray} title="Action Movies" />
        <Slider arr={romanticArray} title="Romantic Movies" />
        <Slider arr={comedyArray} title="Comedy Movies" />
        <Slider arr={actionAndAdv} title="Action & Adventure Movies" />
        <Slider arr={familyArray} title="Family Movies" />
        <Slider arr={horrorArray} title="Horror Movies" />
        <Slider arr={hollywoodArray} title="Hollywood Movies" />

        <div className="blurred-sliders">
          <div className="blurred"></div>
          <Slider arr={popularArray} />
          <Slider arr={popularArray} />
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
