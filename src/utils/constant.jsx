export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg";

export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const SEARCH_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdz-IV8A7_gvH3FnGN9AZP9cu50QSiYFgU-A&s";

export const NOTIFICATION_ICON =
  "https://cdn-icons-png.flaticon.com/512/3119/3119338.png";

export const DROPDOWN_ICON =
  "https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png";

export const USER_PROFILE_PHOTO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumeSpXjKUAxRdHv5mbaG_ixBJTCTRRm4SDw&s";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "chinese", name: "Chinese" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "arabic", name: "Arabic" },
  { identifier: "assam", name: "Assam" },
  { identifier: "bengal", name: "Bengal" },
  { identifier: "bhojpuri", name: "Bhojpuri" },
  { identifier: "dogri", name: "Dogri" },
  { identifier: "gujarati", name: "Gujarati" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "tamil", name: "Tamil" },
];