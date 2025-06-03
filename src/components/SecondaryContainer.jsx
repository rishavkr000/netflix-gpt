import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movieList);
  return (
    movies && (
      <div className="text-white bg-black">
        <div className="pl-1 md:pl-4 mt-0 md:-mt-72 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovie} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
