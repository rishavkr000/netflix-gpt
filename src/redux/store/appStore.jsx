import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieListReducer from "../slice/movieListSlice";
import gptReducer from "../slice/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movieList: movieListReducer,
    gpt: gptReducer,
  },
});

export default appStore;
