import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";

function BrewMethod() {
  const brewMethod = useSelector((state) => state.brewMethod.value);
  const dispatch = useDispatch();

  return (
    // row of buttons for each brew method  (pour over, french press, etc)
    <div>
      <button onClick={() => dispatch(setBrewMethod("Aeropress"))}>
        Aeropress
      </button>
      <button onClick={() => dispatch(setBrewMethod("Chemex"))}>Chemex</button>
      <button onClick={() => dispatch(setBrewMethod("French Press"))}>
        French Press
      </button>
      <button onClick={() => dispatch(setBrewMethod("Pour Over"))}>
        Pour Over
      </button>
      <button onClick={() => dispatch(setBrewMethod("V60"))}>V60</button>
      <button onClick={() => dispatch(setBrewMethod("Espresso"))}>
        Espresso
      </button>
      <button onClick={() => dispatch(setBrewMethod("Cold Brew"))}>
        Cold Brew
      </button>
    </div>
  );
}

export default BrewMethod;
