import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "amount",
  initialState: {
    weight: "",
  },
  reducers: {
    setAmount: (state, action) => {
      state.weight = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;

export default amountSlice.reducer;
