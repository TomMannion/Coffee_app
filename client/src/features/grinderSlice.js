import { createSlice } from "@reduxjs/toolkit";

export const grinderSlice = createSlice({
  name: "grinder",
  initialState: {
    grinder: "",
  },
  reducers: {
    setGrinder: (state, action) => {
      state.grinder = action.payload;
    },
  },
});

export const { setGrinder } = grinderSlice.actions;

export default grinderSlice.reducer;
