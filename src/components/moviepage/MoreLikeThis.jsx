import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const MoreLikeThis = () => {
  let arr = [
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
    `src/assets/moviepage/movie.jpg`,
  ];

  return (
    <div className="morelikethis">
      <div className="morelikethis-title">
        <h2>More Like This</h2>
        <div className="morelikethis-container flex">
          {arr.map((img) => (
            <img src={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;