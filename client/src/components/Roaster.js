import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setRoaster } from "../features/roasterSlice";

function Roaster() {
  const roaster = useSelector((state) => state.roaster.roast);
  const dispatch = useDispatch();

  return (
    <TextField
      autoFocus
      className="roaster"
      type="text"
      label="Enter a coffee roaster"
      value={roaster}
      onChange={(e) => dispatch(setRoaster(e.target.value))}
    />
  );
}

export default Roaster;
