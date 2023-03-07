import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { pour: "", time: "" },
    { pour: "", time: "" },
    { pour: "", time: "" },
  ],
};

export const pourGroupSlice = createSlice({
  name: "pourGroup",
  initialState,
  reducers: {
    setIndividualPour: (state, action) => {
      console.log(action.payload);
      state.value[action.payload.index] = {
        pour: action.payload.pour,
        time: action.payload.time,
      };
    },
    addToPourArray: (state) => {
      state.value.push({ pour: "", time: "" });
    },
  },
});

export const { setIndividualPour, addToPourArray } = pourGroupSlice.actions;

export default pourGroupSlice.reducer;
