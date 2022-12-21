import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setMethod } from "../features/methodSlice";

function Method() {
  const method = useSelector((state) => state.method.value);
  const dispatch = useDispatch();

  return (
    <TextField
      className="comment"
      type="text"
      label="Method"
      multiline
      rows={4}
      value={method}
      onChange={(e) => dispatch(setMethod(e.target.value))}
    />
  );
}

export default Method;
