import { configureStore } from "@reduxjs/toolkit";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";
import brewMethodReducer from "../features/brewMethodSlice";
import grinderReducer from "../features/grinderSlice";

export const store = configureStore({
  reducer: {
    roaster: roasterReducer,
    origin: originReducer,
    brewMethod: brewMethodReducer,
    grinder: grinderReducer,
  },
});
