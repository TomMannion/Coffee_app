import { createSlice } from "@reduxjs/toolkit";

export const waterTempSlice = createSlice({
  name: "waterTemp",
  initialState: {
    value: "",
  },
  reducers: {
    setWaterTemp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWaterTemp } = waterTempSlice.actions;

export default waterTempSlice.reducer;
