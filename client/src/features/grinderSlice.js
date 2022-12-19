import { createSlice } from "@reduxjs/toolkit";

export const grinderSlice = createSlice({
  name: "grinder",
  initialState: {
    value: "",
  },
  reducers: {
    setGrinder: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGrinder } = grinderSlice.actions;

export default grinderSlice.reducer;
