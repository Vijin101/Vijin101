import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { getCheckboxStyles } from "./InputStyles/inputstyles";

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
      sx={getCheckboxStyles(size)}
      control={
        <Checkbox
          sx={getCheckboxStyles(size)}
          checked={checked}
          onChange={onChange}
          {...rest}
        />
      } // Spread the rest of the props here
      label={label}
      className={`${className}`}
    />
  );
};

export default CheckboxInput;
