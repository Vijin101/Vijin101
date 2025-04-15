import React from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import {
  getInputStyles,
  getChipStyles,
  getSelectStyles,
} from "./InputStyles/inputstyles";

const MultiSelectDropdown = ({
  label,
  placeholder,
  value = [],
  onChange,
  options,
  className,
  size = "medium",
  ...rest
}) => {
  const handleChange = (event, newValue) => {
    // Filter out duplicates
    const uniqueValues = newValue.reduce((acc, current) => {
      const exists = acc.some((item) =>
        item.value && current.value
          ? item.value === current.value
          : item === current
      );
      return exists ? acc : [...acc, current];
    }, []);

    onChange(uniqueValues);
  };

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={handleChange}
      options={options}
      getOptionLabel={(option) => option.label || option}
      isOptionEqualToValue={(option, value) =>
        option.value && value.value
          ? option.value === value.value
          : option === value
      }
      sx={{
        ...getSelectStyles(size),
        "& .MuiOutlinedInput-root": {
          height: "100%",
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          sx={{
            ...getInputStyles(size),
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
          }}
          className={`${className} mb-4`}
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip
              {...tagProps}
              key={key}
              sx={getChipStyles(size)}
              label={option.label || option}
            />
          );
        })
      }
      {...rest}
    />
  );
};

export default MultiSelectDropdown;
