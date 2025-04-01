import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  size = "medium",
  iconLeft = null,
  iconRight = null,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      className={`${className}`}
      sx={getInputStyles(size)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{iconLeft}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">{iconRight}</InputAdornment>
        ),
      }}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default TextInput;
