import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ pour: "", time: "" }],
};

export const pourGroupSlice = createSlice({
  name: "pourGroup",
  initialState,
  reducers: {
    setIndividualPour: (state, action) => {
      if (action.payload.time) {
        state.value[action.payload.index].time = action.payload.time;
      } else {
        state.value[action.payload.index].pour = action.payload.pour;
      }
    },
    addToPourArray: (state) => {
      state.value.push({ pour: "", time: "" });
    },
  },
});

export const { setIndividualPour, addToPourArray } = pourGroupSlice.actions;

export default pourGroupSlice.reducer;
