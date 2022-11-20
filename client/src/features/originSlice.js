import { createSlice } from "@reduxjs/toolkit";

export const originSlice = createSlice({
  name: "origin",
  initialState: {
    origin: "",
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setOrigin } = originSlice.actions;

export default originSlice.reducer;
