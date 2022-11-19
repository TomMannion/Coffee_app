import { configureStore } from "@reduxjs/toolkit";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";

export const store = configureStore({
  reducer: {
    roaster: roasterReducer,
    origin: originReducer,
  },
});
