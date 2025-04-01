import React from "react";
import { TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const TimeInput = ({
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
      type="time"
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      className={`${className} mb-4`}
      sx={getInputStyles(size)}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default TimeInput;
