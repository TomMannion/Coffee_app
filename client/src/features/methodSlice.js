import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [""],
};

export const methodSlice = createSlice({
  name: "method",
  initialState,
  // reducers: {
  //   setMethod: (state, action) => {
  //     state.value = action.payload;
  //   },
  // },
  reducers: {
    setIndividualStep: (state, action) => {
      state.value[action.payload.index] = action.payload.step;
    },
    addToStepArray: (state) => {
      state.value.push("");
    },
  },
});

export const { setIndividualStep, addToStepArray } = methodSlice.actions;

export default methodSlice.reducer;
