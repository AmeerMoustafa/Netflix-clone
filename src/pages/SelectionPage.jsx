import "../styles/utilities.css";
import "../styles/moviesPage.css";

import React from "react";
import Footer from "../components/reusable/Footer";
import Navbar from "../components/reusable/Navbar";
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
      const json = await response.json();
      setPopularArray(json.results);
      console.log(json.results);
    } catch (err) {
      console.error("error:" + err);
    }
  };

  const getActionMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=28`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setActionArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getRomanticMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=10749`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setRomanticArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getComedyMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=35`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setComedyArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getHollywoodMovies = () => {
    const getMoviByGenreURL =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=US";

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setHollywoodArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getActionAndAdventureMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${[
      12, 28,
    ]}`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setActionAndAdv(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getFamilyMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=10751`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setFamilyArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const getHorrorMovies = () => {
    const getMoviByGenreURL = `https://api.themoviedb.org/3/discover/movie?with_genres=27`;

    fetch(getMoviByGenreURL, options)
      .then((res) => res.json())
      .then((json) => {
        setHorrorArray(json.results);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
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

        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>


        <div className="blurred-sliders">
          <div className="blurred"></div>
          <div className="slider">s</div>
          <div className="slider">s</div>
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
            className="read-more-link"
          >
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
