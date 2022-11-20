import { createSlice } from "@reduxjs/toolkit";

export const addPourSlice = createSlice({
  name: "addPour",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = addPourSlice.actions;

export default addPourSlice.reducer;
