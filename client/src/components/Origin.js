import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setOrigin } from "../features/originSlice";

function Origin() {
  const origin = useSelector((state) => state.origin.value);
  const dispatch = useDispatch();

  return (
    <TextField
      className="origin"
      type="text"
      label="Coffee Origin"
      value={origin}
      onChange={(e) => dispatch(setOrigin(e.target.value))}
    />
  );
}

export default Origin;
