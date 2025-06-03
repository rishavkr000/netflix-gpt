import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../redux/slice/movieListSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const popularMoviesInStore = useSelector(
    (store) => store.movieList.popularMovie
  );

  const popularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    !popularMoviesInStore && popularMovies();
  }, []);
};

export default usePopularMovie;
