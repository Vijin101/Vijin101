import React from "react";
import { TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const DateInput = ({
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
      value={value}
      onChange={onChange}
      type="date"
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

export default DateInput;
