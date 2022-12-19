import { createSlice } from "@reduxjs/toolkit";

export const methodSlice = createSlice({
  name: "method",
  initialState: {
    value: "",
  },
  reducers: {
    setMethod: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMethod } = methodSlice.actions;

export default methodSlice.reducer;
