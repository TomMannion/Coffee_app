import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: "",
  },
  reducers: {
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { setComment } = commentSlice.actions;

export default commentSlice.reducer;
