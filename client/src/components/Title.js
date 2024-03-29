import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../features/titleSlice";

function Title() {
  const title = useSelector((state) => state.title.value);
  const dispatch = useDispatch();

  return (
    <TextField
      autoFocus
      className="title"
      type="text"
      label="Title"
      value={title}
      onChange={(e) => dispatch(setTitle(e.target.value))}
    />
  );
}

export default Title;
