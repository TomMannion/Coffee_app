import { createSlice } from "@reduxjs/toolkit";

export const originSlice = createSlice({
  name: "origin",
  initialState: {
    value: "",
  },
  reducers: {
    setOrigin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrigin } = originSlice.actions;

export default originSlice.reducer;
