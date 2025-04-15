import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { getToggleSwitchStyles } from "./InputStyles/inputstyles";

const ToggleSwitch = ({
  label,
  checked,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          sx={getToggleSwitchStyles(size)}
          {...rest}
        />
      }
      label={label}
      className={`${className}`}
    />
  );
};

export default ToggleSwitch;
