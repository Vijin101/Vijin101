import React from "react";
import { Slider, Typography } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const RangeSlider = ({
  label,
  value,
  onChange,
  min,
  max,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <div className={`${className} mb-4`}>
      {label && <Typography gutterBottom>{label}</Typography>}
      <Slider
        sx={getInputStyles(size)}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        {...rest} // Spread the rest of the props here
      />
    </div>
  );
};

export default RangeSlider;
