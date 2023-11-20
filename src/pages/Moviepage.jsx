import "../styles/utilities.css";
import "../styles/moviepage.css";
import MovieDescription from "../components/moviepage/MovieDescription";
import MoreDetails from "../components/moviepage/MoreDetails";
import MoreLikeThis from "../components/moviepage/MoreLikeThis";
import ComingSoon from "../components/moviepage/ComigSoon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function Moviepage() {
  const { movieID } = useParams();
  const [movie , setMovie] = useState({})

  const fetchData = () => {
    const apiKey =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFjZGY1YmYzNTdjMTJjMzNmMGRkNTc1MDU4YTI1YyIsInN1YiI6IjY1NThmM2U4YjU0MDAyMTRjZjM5ZjEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRAJBNXxK0rODxMyrd9a7IxiyJonE0jpKGUPC6MbrSw";
    const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: apiKey },
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  };
  
useEffect(() => {
  fetchData()
} , []);

  return (
    <div className="moviepage">
      <MovieDescription movie={movie}></MovieDescription>
      <MoreDetails></MoreDetails>
      <MoreLikeThis></MoreLikeThis>
      <ComingSoon></ComingSoon>
    </div>
  );
}

export default Moviepage;
