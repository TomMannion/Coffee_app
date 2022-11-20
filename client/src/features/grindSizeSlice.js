import { createSlice } from "@reduxjs/toolkit";

export const grindSizeSlice = createSlice({
  name: "grindSize",
  initialState: {
    size: "",
  },
  reducers: {
    setGrindSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { setGrindSize } = grindSizeSlice.actions;

export default grindSizeSlice.reducer;
