import { createSlice } from "@reduxjs/toolkit";

export const roasterSlice = createSlice({
  name: "roaster",
  initialState: {
    roast: "",
  },
  reducers: {
    setRoaster: (state, action) => {
      state.roast = action.payload;
    },
  },
});

export const { setRoaster } = roasterSlice.actions;

export default roasterSlice.reducer;
