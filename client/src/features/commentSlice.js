import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    value: "",
  },
  reducers: {
    setComment: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setComment } = commentSlice.actions;

export default commentSlice.reducer;
