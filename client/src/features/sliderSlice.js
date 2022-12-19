import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: "",
  },
  reducers: {
    setSlider: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
