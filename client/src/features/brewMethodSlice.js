import { createSlice } from "@reduxjs/toolkit";

export const brewMethodSlice = createSlice({
  name: "brewMethod",
  initialState: {
    brew: "",
  },
  reducers: {
    setBrewMethod: (state, action) => {
      state.brew = action.payload;
    },
  },
});

export const { setBrewMethod } = brewMethodSlice.actions;

export default brewMethodSlice.reducer;
