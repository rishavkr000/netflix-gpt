import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  
  name: "gpt",
  initialState: {
    isToggleGptSearchPage: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    isToggleGptSearchPage: (state) => {
      state.isToggleGptSearchPage = !state.isToggleGptSearchPage;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});

export const { isToggleGptSearchPage, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
