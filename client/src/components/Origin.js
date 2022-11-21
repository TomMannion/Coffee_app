import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setOrigin } from "../features/originSlice";

function Origin() {
  const origin = useSelector((state) => state.origin.origin);
  const dispatch = useDispatch();

  return (
    <TextField
      sx={{
        width: 300,
      }}
      className="origin"
      type="text"
      label="Coffee Origin"
      value={origin}
      onChange={(e) => dispatch(setOrigin(e.target.value))}
    />
  );
}

export default Origin;
