import { configureStore } from "@reduxjs/toolkit";
import roasterReducer from "../features/roasterSlice";

export const store = configureStore({
  reducer: {
    roaster: roasterReducer,
  },
});
