import "../styles/utilities.css";
import "../styles/moviepage.css";
import MovieDescription from "../components/moviepage/MovieDescription";
import MoreDetails from "../components/moviepage/MoreDetails";
import MoreLikeThis from "../components/moviepage/MoreLikeThis";
import ComingSoon from "../components/moviepage/ComingSoon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Moviepage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});
  const [casts, setCasts] = useState([]);

  const fetchData = async () => {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFjZGY1YmYzNTdjMTJjMzNmMGRkNTc1MDU4YTI1YyIsInN1YiI6IjY1NThmM2U4YjU0MDAyMTRjZjM5ZjEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRAJBNXxK0rODxMyrd9a7IxiyJonE0jpKGUPC6MbrSw";
    const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: apiKey },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    setMovie(data);
    console.log(data);
  };

  const getCredits = async () => {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFjZGY1YmYzNTdjMTJjMzNmMGRkNTc1MDU4YTI1YyIsInN1YiI6IjY1NThmM2U4YjU0MDAyMTRjZjM5ZjEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRAJBNXxK0rODxMyrd9a7IxiyJonE0jpKGUPC6MbrSw";
    const url = `https://api.themoviedb.org/3/movie/${movieID}/credits`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: apiKey },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const sliced_array = data.cast.slice(0, 4);
    setCasts(sliced_array);
  };

  useEffect(() => {
    fetchData();
    getCredits();
  }, []);

  return (
    <div className="moviepage">
      <MovieDescription movie={movie} casts={casts}></MovieDescription>
      <MoreDetails></MoreDetails>
      <MoreLikeThis></MoreLikeThis>
      <ComingSoon></ComingSoon>
    </div>
  );
}

export default Moviepage;
