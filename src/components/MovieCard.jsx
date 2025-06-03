import { MOVIE_POSTER_URL } from "../utils/constant"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-42 pr-4">
        <img src={MOVIE_POSTER_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard