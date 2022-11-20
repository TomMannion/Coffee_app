import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGrinder } from "../features/grinderSlice";

function Grinder() {
  const grinder = useSelector((state) => state.grinder.grind);
  const dispatch = useDispatch();

  return (
    <input
      className="grinder"
      type="text"
      placeholder="Grinder"
      value={grinder}
      onChange={(e) => dispatch(setGrinder(e.target.value))}
    />
  );
}

export default Grinder;
