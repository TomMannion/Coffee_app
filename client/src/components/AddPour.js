import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/addPourSlice";

function AddPour(props) {
  const addPour = useSelector((state) => state.addPour.value);
  const dispatch = useDispatch();
  return (
    <button className="addPour" onClick={() => dispatch(increment())}>
      Add Pour
    </button>
  );
}

export default AddPour;
