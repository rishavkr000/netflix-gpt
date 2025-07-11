import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import GptSearchPage from "./Gpt/GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptToggle = useSelector((store) => store.gpt.isToggleGptSearchPage);
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptToggle ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
