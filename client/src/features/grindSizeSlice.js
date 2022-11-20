import { createSlice } from "@reduxjs/toolkit";

export const grindSizeSlice = createSlice({
  name: "grindSize",
  initialState: {
    value: "",
  },
  reducers: {
    setGrindSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGrindSize } = grindSizeSlice.actions;

export default grindSizeSlice.reducer;
