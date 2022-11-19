import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: {
        roaster: roasterReducer,
        origin: originReducer,
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



