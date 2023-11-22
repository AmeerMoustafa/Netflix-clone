import "../styles/utilities.css";
import "../styles/moviepage.css";
import Navbar from "../components/reusable/Navbar";
import MovieDescription from "../components/moviepage/MovieDescription";
import MoreDetails from "../components/moviepage/MoreDetails";
import MoreLikeThis from "../components/moviepage/MoreLikeThis";
import ComingSoon from "../components/moviepage/ComingSoon";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/reusable/Footer";

function Moviepage() {
  let { movieID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [allcasts, setallCasts] = useState([]);
  const [recomArray, setRecomArray] = useState([]);
  const [upcomingArray, setUpcomingArray] = useState([]);

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFjZGY1YmYzNTdjMTJjMzNmMGRkNTc1MDU4YTI1YyIsInN1YiI6IjY1NThmM2U4YjU0MDAyMTRjZjM5ZjEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRAJBNXxK0rODxMyrd9a7IxiyJonE0jpKGUPC6MbrSw";

  const options = {
    method: "GET",
    headers: { accept: "application/json", Authorization: apiKey },
  };

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
    const response = await fetch(url, options);
    const data = await response.json();
    setMovie(data);
  };

  const getRecommendations = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    const sliced_array = await data.results.slice(0, 12);
    setRecomArray(sliced_array);
  };

  const getCredits = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}/credits`;
    const response = await fetch(url, options);
    const data = await response.json();
    setallCasts(data.cast)
    const sliced_array = data.cast.slice(0, 4);
    setCasts(sliced_array);
  };

  const getUpcomingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming`;
    const response = await fetch(url, options);
    const data = await response.json();
    const sliced_array = data.results.slice(0, 9);
    setUpcomingArray(sliced_array);
  };

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    fetchData();
    getCredits();
    getRecommendations();
    getUpcomingMovies();
  }, [movieID]);

  return (
    <div className="moviepage">
      <Navbar />
      <MovieDescription movie={movie} casts={casts}></MovieDescription>
      <MoreDetails movie={movie} casts={casts} allcasts={allcasts}></MoreDetails>
      <MoreLikeThis recomArray={recomArray} handleClick={handleClick}></MoreLikeThis>
      <ComingSoon upcomingArray={upcomingArray} handleClick={handleClick}></ComingSoon>
      <Footer />
    </div>
  );
}

export default Moviepage;
