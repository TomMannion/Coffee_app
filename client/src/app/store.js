import { configureStore } from "@reduxjs/toolkit";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";
import brewMethodReducer from "../features/brewMethodSlice";
import grinderReducer from "../features/grinderSlice";
import grindSizeReducer from "../features/grindSizeSlice";
import pourGroupReducer from "../features/pourGroupSlice";
import commentReducer from "../features/commentSlice";
import amountReducer from "../features/amountSlice";

export const store = configureStore({
  reducer: {
    roaster: roasterReducer,
    origin: originReducer,
    brewMethod: brewMethodReducer,
    grinder: grinderReducer,
    grindSize: grindSizeReducer,
    pourGroup: pourGroupReducer,
    comment: commentReducer,
    amount: amountReducer,
  },
});
