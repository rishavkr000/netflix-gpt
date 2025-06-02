import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieListReducer from "../slice/movieListSlice";
import gptReducer from "../slice/gptSlice";
import configReducer from "../slice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movieList: movieListReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
