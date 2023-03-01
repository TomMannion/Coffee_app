import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setGrindSize } from "../features/grindSizeSlice";

function GrindSize() {
  const grindSize = useSelector((state) => state.grindSize.value);
  const dispatch = useDispatch();

  return (
    <TextField
      autoFocus
      className="grindSize"
      type="text"
      label="Grind Size"
      value={grindSize}
      onChange={(e) => dispatch(setGrindSize(e.target.value))}
    />
  );
}

export default GrindSize;
