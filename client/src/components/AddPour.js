import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPourArray } from "../features/pourGroupSlice";
import Button from "@mui/material/Button";

function AddPour(props) {
  const pourGroup = useSelector((state) => state.pourGroup.value);
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
