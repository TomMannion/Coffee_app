import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import roasterReducer from "../features/roasterSlice";
import originReducer from "../features/originSlice";
import brewMethodReducer from "../features/brewMethodSlice";
import grinderReducer from "../features/grinderSlice";
import grindSizeReducer from "../features/grindSizeSlice";
import pourGroupReducer from "../features/pourGroupSlice";
import commentReducer from "../features/commentSlice";
import amountReducer from "../features/amountSlice";
import waterTempReducer from "../features/waterTempSlice";
import methodReducer from "../features/methodSlice";
import titleReducer from "../features/titleSlice";
import sliderReducer from "../features/sliderSlice";

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
        grindSize: grindSizeReducer,
        pourGroup: pourGroupReducer,
        comment: commentReducer,
        amount: amountReducer,
        waterTemp: waterTempReducer,
        method: methodReducer,
        title: titleReducer,
        slider: sliderReducer,
        preloadedState: initialState,
      },
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
