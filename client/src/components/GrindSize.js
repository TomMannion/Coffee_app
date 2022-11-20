import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGrindSize } from "../features/grindSizeSlice";

function GrindSize() {
  const grindSize = useSelector((state) => state.grindSize.value);
  const dispatch = useDispatch();

  return (
    <input
      className="grindSize"
      type="text"
      placeholder="Grind Size"
      value={grindSize}
      onChange={(e) => dispatch(setGrindSize(e.target.value))}
    />
  );
}

export default GrindSize;
