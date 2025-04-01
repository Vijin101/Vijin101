import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { getRadioStyles } from "./InputStyles/inputstyles";
const RadioInput = ({
  label,
  value,
  onChange,
  options,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={`${className} mb-4`}
      {...rest}
      sx={getRadioStyles(size)}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioInput;
