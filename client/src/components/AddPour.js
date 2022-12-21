import React from "react";
import { useDispatch } from "react-redux";
import { addToPourArray } from "../features/pourGroupSlice";
import Button from "@mui/material/Button";

function AddPour(props) {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        dispatch(addToPourArray());
      }}
    >
      Add Pour
    </Button>
  );
}

export default AddPour;
