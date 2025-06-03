import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMoviesList } from "../redux/slice/movieListSlice";
import { API_OPTIONS, URL } from "../utils/constant";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const nowPlayingMoviesInStore = useSelector(
    (store) => store.movieList.nowPlayingMovies
  );

  const getNowPlayingMovieList = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMoviesList(json.results));
  };

  useEffect(() => {
    // If nowPlayingMovies are null then only call API
    !nowPlayingMoviesInStore && getNowPlayingMovieList();
  }, []);
};
export default useNowPlayingMovie;
