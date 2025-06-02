import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMoviesList } from "../redux/slice/movieListSlice";
import { API_OPTIONS, URL } from "../utils/constant";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovieList = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMoviesList(json.results));
  };

  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};
export default useNowPlayingMovie;
