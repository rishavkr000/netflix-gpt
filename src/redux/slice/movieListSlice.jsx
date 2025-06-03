import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMoviesList,
  addMovieTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieListSlice.actions;

export default movieListSlice.reducer;
