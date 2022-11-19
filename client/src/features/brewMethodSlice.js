import { createSlice } from "@reduxjs/toolkit";

export const brewMethodSlice = createSlice({
  name: "brewMethod",
  initialState: {
    value: "",
  },
  reducers: {
    setBrewMethod: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBrewMethod } = brewMethodSlice.actions;

export default brewMethodSlice.reducer;
