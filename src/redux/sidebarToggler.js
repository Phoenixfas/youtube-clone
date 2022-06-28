import { createSlice } from "@reduxjs/toolkit";

export const sidebarTogglerSlice = createSlice({
  name: "sidebarToggler",
  initialState: {
    value: true,
  },
  reducers: {
    toggler: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggler } = sidebarTogglerSlice.actions;

export default sidebarTogglerSlice.reducer;
