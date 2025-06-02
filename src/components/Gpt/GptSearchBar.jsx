import { useSelector } from "react-redux"
import lang from "../../utils/languageConstant"

const GptSearchBar = () => {
  const selectedLanguage = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[selectedLanguage].placeholder}
        />
        <button onClick={(e) => e.preventDefault()} className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 cursor-pointer">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar