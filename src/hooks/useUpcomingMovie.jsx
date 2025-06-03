import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../redux/slice/movieListSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingMoviesInStore = useSelector(
    (store) => store.movieList.popularMovie
  );

  const upcomingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    !upcomingMoviesInStore && upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
