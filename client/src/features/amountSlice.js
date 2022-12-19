import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "amount",
  initialState: {
    value: "",
  },
  reducers: {
    setAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;

export default amountSlice.reducer;
