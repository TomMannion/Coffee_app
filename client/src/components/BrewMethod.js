import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";

function BrewMethod() {
  const brewMethod = useSelector((state) => state.brewMethod.brew);
  const dispatch = useDispatch();

  return (
    <TextField
      className="brewMethod"
      type="text"
      label="Brew Method"
      value={brewMethod}
      onChange={(e) => dispatch(setBrewMethod(e.target.value))}
    />
  );
}

export default BrewMethod;
