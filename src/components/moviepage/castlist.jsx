import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const Castlist = ({ cast }) => {
  const c1 = cast.slice(0, 4);
  const c2 = cast.slice(4, 8);
  const c3 = cast.slice(8, 12);

  return (
    <>
      <div className="movie-casts flex">
        <ul>
          {c1.map((cast, index) => (
            <li key={index}>{cast.name}</li>
          ))}
        </ul>

        <ul>
          {c2.map((cast, index) => (
            <li key={index}>{cast.name}</li>
          ))}
        </ul>

        <ul>
          {c3.map((cast, index) => (
            <li key={index}>{cast.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Castlist;
