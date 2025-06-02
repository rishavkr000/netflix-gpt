import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieListReducer from "../slice/movieListSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movieList: movieListReducer,
  },
});

export default appStore;
