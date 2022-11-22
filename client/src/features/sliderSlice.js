import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    taste: "",
  },
  reducers: {
    setSlider: (state, action) => {
      state.taste = action.payload;
    },
  },
});

export const { setSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
