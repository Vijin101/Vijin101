import React from "react";
import { Autocomplete, TextField, Checkbox } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const CustomAutocompleteInput = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  className,
  size = "medium",
  multiple = true,
  ...rest
}) => {
  // Ensure value is always an array
  const normalizedValue = Array.isArray(value) ? value : value ? [value] : [];

  return (
    <Autocomplete
      multiple={multiple}
      value={normalizedValue}
      onChange={(event, newValue) => onChange(newValue)}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label || option}
      isOptionEqualToValue={(option, selectedValue) =>
        option.value === selectedValue.value
      }
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox checked={selected} style={{ marginRight: 8 }} />
          {option.label || option}
        </li>
      )}
      renderInput={(params) => {
        const selectedText = normalizedValue
          .map((option) => option.label || option)
          .join(", ");

        return (
          <TextField
            {...params}
            label={label}
            placeholder={normalizedValue.length === 0 ? placeholder : ""}
            variant="outlined"
            fullWidth
            sx={{
              ...getInputStyles(size),
              "& .MuiInputBase-input": {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              },
            }}
            className={`${className}`}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <span
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block",
                    maxWidth: "calc(100% - 32px)",
                  }}
                >
                  {selectedText}
                </span>
              ),
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default CustomAutocompleteInput;
