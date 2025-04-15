import React, { useState } from "react";
import { Autocomplete, TextField, Checkbox } from "@mui/material";

import {
  getAutocompleteInputStyles,
  getCheckboxStyles,
  getInputStyles,
  getSelectStyles,
} from "./InputStyles/inputstyles";

const MultiSelectAutocompleteCheckbox = ({
  label,
  placeholder,
  value, // Expects an array of selected option objects
  onChange,
  options,
  className, // Note: Styling primarily controlled by `sx` and `getInputStyles`
  size = "medium",
  ...rest
}) => {
  return (
    <Autocomplete
      multiple // Enable multi-select
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue); // Pass the whole new array of selected options
      }}
      options={options}
      disableCloseOnSelect // Keep dropdown open after selecting an item
      getOptionLabel={(option) => option.label || ""} // How to display the option label
      isOptionEqualToValue={(option, val) => option.value === val.value} // Crucial for comparing objects
      renderOption={(props, option, { selected }) => (
        // `props` must be spread onto the `li` element for accessibility and functionality
        <li {...props} key={option.value}>
          <Checkbox
            // icon={icon}
            // checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            sx={getCheckboxStyles(size)}
          />
          {option.label} {/* Display the option's label */}
        </li>
      )}
      sx={getSelectStyles(size)} // Apply custom styles to the Autocomplete wrapper
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={value && value.length > 0 ? "" : placeholder} // Hide placeholder if values are selected
          variant="outlined"
          // Apply styles also to the TextField for consistency (border, label, etc.)
          // Note: getInputStyles already sets fullWidth via its own structure
          //   sx={getInputStyles(size)}
          sx={getAutocompleteInputStyles(size)}
          className={className} // Apply user-provided class names if any
        />
      )}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => (
          <span key={option.value} {...getTagProps(index)}>
            {option.label}
          </span>
        ));
      }}
      {...rest} // Spread any other props (like freeSolo, filterOptions etc.)
    />
  );
};

export default MultiSelectAutocompleteCheckbox;
