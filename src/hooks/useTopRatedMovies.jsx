import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../redux/slice/movieListSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/top_rated";

  const topRatedMoviesInStore = useSelector(
    (store) => store.movieList.popularMovie
  );

  const topRatedMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    !topRatedMoviesInStore && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
