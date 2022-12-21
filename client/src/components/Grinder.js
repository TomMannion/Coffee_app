import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setGrinder } from "../features/grinderSlice";

function Grinder() {
  const grinder = useSelector((state) => state.grinder.value);
  const dispatch = useDispatch();

  return (
    <TextField
      className="grinder"
      type="text"
      label="Grinder"
      value={grinder}
      onChange={(e) => dispatch(setGrinder(e.target.value))}
    />
  );
}

export default Grinder;
