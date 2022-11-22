import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setWaterTemp } from "../features/waterTempSlice";

function WaterTemp() {
  const waterTemp = useSelector((state) => state.waterTemp.temp);
  const dispatch = useDispatch();

  return (
    <TextField
      className="WaterTemp"
      type="text"
      label="Water Temperature"
      value={waterTemp}
      onChange={(e) => dispatch(setWaterTemp(e.target.value))}
    />
  );
}

export default WaterTemp;
