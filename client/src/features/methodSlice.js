import { createSlice } from "@reduxjs/toolkit";

export const methodSlice = createSlice({
  name: "method",
  initialState: {
    text: "",
  },
  reducers: {
    setMethod: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setMethod } = methodSlice.actions;

export default methodSlice.reducer;
