import React from "react";
import { TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const EmailInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type="email"
      variant="outlined"
      fullWidth
      className={`${className} mb-4`}
      sx={getInputStyles(size)}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default EmailInput;
