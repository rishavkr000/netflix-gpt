import { BACKGROUND_IMAGE } from "../../utils/constant";
import GptMovieSuggession from "./GptMovieSuggession";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggession />
    </div>
  );
};

export default GptSearchPage;
