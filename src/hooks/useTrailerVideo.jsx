import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/slice/movieListSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const trailerVideoInStore = useSelector(
    (store) => store.movieList.popularMovie
  );

  const getMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideoInStore && getMovie();
  }, []);
};

export default useTrailerVideo;
