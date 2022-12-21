import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { setSlider } from "../features/sliderSlice";

const marks = [
  {
    value: 0,
    label: "Acidic",
  },
  {
    value: 100,
    label: "Bitter",
  },
];

export default function VerticalSlider() {
  const slider = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ height: 300 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        defaultValue={50}
        aria-label="Taste"
        valueLabelDisplay="auto"
        marks={marks}
        value={slider}
        onChange={(e) => dispatch(setSlider(e.target.value))}
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
}
