import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrigin } from "../features/originSlice";

function Origin() {
  const origin = useSelector((state) => state.origin.value);
  const dispatch = useDispatch();

  return (
    <input
      className="origin"
      type="text"
      placeholder="Coffee Origin"
      value={origin}
      onChange={(e) => dispatch(setOrigin(e.target.value))}
    />
  );
}

export default Origin;
