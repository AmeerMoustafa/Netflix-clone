import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const ComingSoon = () => {
  let arr = [
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
    `Avatar The Last Airbender Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.`,
  ];

  return (
    <div className="comingsoon">
      <div className="comingsoon-title">
        <h2>Come Soon</h2>
        <div className="comingsoon-container flex">
          {arr.map((text) => (
            <div className="more-movies">
              <p className="movie-names">Title</p>
              <p className="movie-description">{text}</p>
            </div>
          ))}
          <p className="tudum-promote">
            Go behind the scenes of Netflix TV shows and movies, see what's
            coming soon and watch bonus videos on Tudum.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
