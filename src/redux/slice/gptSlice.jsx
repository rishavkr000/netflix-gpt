import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isToggleGptSearchPage: false,
  },
  reducers: {
    isToggleGptSearchPage: (state) => {
      state.isToggleGptSearchPage = !state.isToggleGptSearchPage;
    },
  },
});

export const { isToggleGptSearchPage } = gptSlice.actions;

export default gptSlice.reducer;
