import "../styles/utilities.css";
import "../styles/moviepage.css";
import MovieDescription from "../components/moviepage/MovieDescription";
import MoreDetails from "../components/moviepage/MoreDetails";

function Moviepage() {
  return (
    <div className="moviepage">
      <MovieDescription></MovieDescription>
      <MoreDetails></MoreDetails>
    </div>
  );
}

export default Moviepage;
