import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRoaster } from "../features/roasterSlice";

function Roaster() {
  const roaster = useSelector((state) => state.roaster.value);
  const dispatch = useDispatch();

  return (
    <input
      autoFocus
      className="roaster"
      type="text"
      placeholder="Enter a coffee roaster"
      value={roaster}
      onChange={(e) => dispatch(setRoaster(e.target.value))}
    />
  );
}

export default Roaster;
