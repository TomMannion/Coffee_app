import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPourArray } from "../features/pourGroupSlice";

function AddPour(props) {
  const pourGroup = useSelector((state) => state.pourGroup.value);
  const dispatch = useDispatch();
  return (
    <button
      className="addPour"
      onClick={(e) => {
        e.preventDefault();
        dispatch(addToPourArray());
      }}
    >
      Add Pour
    </button>
  );
}

export default AddPour;
