import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";

function BrewMethod() {
  const brewMethod = useSelector((state) => state.brewMethod.brew);
  const dispatch = useDispatch();

  return (
    <input
      className="brewMethod"
      type="text"
      placeholder="Brew Method"
      value={brewMethod}
      onChange={(e) => dispatch(setBrewMethod(e.target.value))}
    />
  );
}

export default BrewMethod;
