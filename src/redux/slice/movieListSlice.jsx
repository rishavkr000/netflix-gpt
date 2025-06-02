import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
        state.nowPlayingMovies =  action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload; 
    }
  },
});

export const { addNowPlayingMoviesList, addMovieTrailer } = movieListSlice.actions;

export default movieListSlice.reducer;

