import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstant";
import { useRef } from "react";
import client from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constant";
import { addGptMovieResult } from "../../redux/slice/gptSlice";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a movie recommendation system and suggest movies name for the query" + searchText.current.value + "only gives me names of top 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Koi mil gya, Gadar 2, bagbaan"

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: gptQuery },
      ],
    });

    if(!completion.choices) {
      // Error Handling
    }

    console.log(completion.choices[0].message.content);

    const getMovies = completion?.choices[0]?.message?.content.split(",");

    const promiseArray = getMovies.map(movie => searchMovieInTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: getMovies, movieResults: tmdbResults}));
  };

  // Search Movie in TMDB
  const searchMovieInTMDB = async (movie) => {
    const url = "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS)
    const json = await data.json();

    return json.results;
  }

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-8 md:col-span-9"
          placeholder={lang[selectedLanguage].placeholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-4 md:col-span-3 m-4 cursor-pointer"
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
