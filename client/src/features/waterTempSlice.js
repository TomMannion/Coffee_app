import { createSlice } from "@reduxjs/toolkit";

export const waterTempSlice = createSlice({
  name: "waterTemp",
  initialState: {
    temp: "",
  },
  reducers: {
    setWaterTemp: (state, action) => {
      state.temp = action.payload;
    },
  },
});

export const { setWaterTemp } = waterTempSlice.actions;

export default waterTempSlice.reducer;
