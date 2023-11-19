import "../styles/utilities.css";
import "../styles/moviesPage.css";

import React from "react";
import Footer from "../components/reusable/Footer";
import Navbar from "../components/reusable/Navbar";

const MoviesPage = () => {
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

        <div className="read-more-link"><a href="https://www.netflix.com/tudum" target="_blank" className="read-more-link">
          Read about Netflix TV shows and movies and watch bonus videos on
          Tudum.com.
        </a></div>
      </div>

      <Footer />

    </div>
  );
};

export default MoviesPage;
