import "../styles/utilities.css";
import "../styles/moviepage.css";
import MovieDescription from "../components/moviepage/MovieDescription";
import MoreDetails from "../components/moviepage/MoreDetails";
import MoreLikeThis from "../components/moviepage/MoreLikeThis";
import ComingSoon from "../components/moviepage/ComigSoon";

function Moviepage() {
  return (
    <div className="moviepage">
      <MovieDescription></MovieDescription>
      <MoreLikeThis></MoreLikeThis>
      <ComingSoon></ComingSoon>
    </div>
  );
}

export default Moviepage;
