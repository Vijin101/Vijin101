import React from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { getInputStyles, getChipStyles } from "./InputStyles/inputstyles";

const MultiSelectDropdown = ({
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
      multiple
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
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            sx={getChipStyles(size)}
            key={index}
            label={option.label || option}
            {...getTagProps({ index })}
          />
        ))
      }
      {...rest} // Spread the rest of the props here
    />
  );
};

export default MultiSelectDropdown;
