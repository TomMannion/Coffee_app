import { createSlice } from "@reduxjs/toolkit";

export const roasterSlice = createSlice({
  name: "roaster",
  initialState: {
    value: "",
  },
  reducers: {
    setRoaster: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRoaster } = roasterSlice.actions;

export default roasterSlice.reducer;
