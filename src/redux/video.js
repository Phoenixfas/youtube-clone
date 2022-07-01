import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videoInfo",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideo: (state, action) => {
      state.videos.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
