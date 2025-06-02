import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
