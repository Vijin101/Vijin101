import React from "react";
import { TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const ColorPicker = ({
  label,
  value,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <TextField
      label={label}
      type="color"
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      className={`${className} mb-4`}
      sx={getInputStyles(size)}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default ColorPicker;
