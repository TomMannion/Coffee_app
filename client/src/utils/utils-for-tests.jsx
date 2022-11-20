import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";
import brewMethodReducer from "../features/brewMethodSlice";
import grinderReducer from "../features/grinderSlice";
import grindSizeSlice from "../features/grindSizeSlice";
import pourGroupReducer from "../features/pourGroupSlice";

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: {
        roaster: roasterReducer,
        origin: originReducer,
        brewMethod: brewMethodReducer,
        grinder: grinderReducer,
        grindSize: grindSizeSlice,
        pourGroup: pourGroupReducer,
        preloadedState: initialState,
      },
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}



