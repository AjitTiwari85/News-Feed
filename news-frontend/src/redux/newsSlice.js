import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { newsList: [] },
  reducers: {
    setNews: (state, action) => { state.newsList = action.payload; },
    addNews: (state, action) => { state.newsList.unshift(action.payload); },
  },
});

export const { setNews, addNews } = newsSlice.actions;
export default newsSlice.reducer;
