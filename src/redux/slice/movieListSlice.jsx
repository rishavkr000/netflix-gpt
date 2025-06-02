import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    nowPlayingMovies: null
  },
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
        state.nowPlayingMovies =  action.payload;
    },
  },
});

export const { addNowPlayingMoviesList } = movieListSlice.actions;

export default movieListSlice.reducer;

