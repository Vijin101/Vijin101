import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const AutocompleteInput = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      options={options}
      getOptionLabel={(option) => option.label || option}
      sx={getInputStyles(size)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          sx={getInputStyles(size)}
          className={`${className} mb-4`}
        />
      )}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default AutocompleteInput;
