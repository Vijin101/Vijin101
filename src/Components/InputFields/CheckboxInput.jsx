import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const CheckboxInput = ({
  label,
  checked,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <FormControlLabel
      sx={getInputStyles(size)}
      control={
        <Checkbox
          sx={getInputStyles(size)}
          checked={checked}
          onChange={onChange}
          {...rest}
        />
      } // Spread the rest of the props here
      label={label}
      className={`${className} mb-4`}
    />
  );
};

export default CheckboxInput;
