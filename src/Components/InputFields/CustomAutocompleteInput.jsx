import React from "react";
import {
  TextField,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip,
  Box,
} from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const CustomAutocompleteInput = ({
  field = null,
  form = null,
  label,
  options,
  className,
  size = "medium",
  onChange = () => {},
  placeholder,
  value: propValue,
  ...rest
}) => {
  const isFormik = Boolean(field && form);
  const [localValue, setLocalValue] = React.useState([]);

  const name = field?.name || rest.name;
  const value = isFormik ? field.value || [] : propValue || localValue;
  const error = isFormik
    ? form.touched?.[name] && Boolean(form.errors?.[name])
    : false;
  const helperText = isFormik
    ? (form.touched?.[name] && form.errors?.[name]) || ""
    : "";

  const handleChange = (event) => {
    const newValue = event.target.value;
    const valueArray =
      typeof newValue === "string"
        ? newValue.split(",")
        : Array.isArray(newValue)
        ? newValue
        : [newValue];

    if (isFormik) {
      form.setFieldValue(name, valueArray);
    } else {
      setLocalValue(valueArray);
      onChange(valueArray);
    }
  };

  return (
    <TextField
      select
      SelectProps={{
        multiple: true,
        renderValue: (selected) => (
          <span>
            {selected.length > 0
              ? `${selected.length} selected`
              : "Select items"}
          </span>
        ),
      }}
      label={label}
      name={name}
      value={Array.isArray(value) ? value : []}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      className={`${className}`}
      sx={{
        ...getInputStyles(size),
        "& .MuiSelect-select": {
          paddingTop: "8px",
          paddingBottom: "8px",
          minHeight: "auto !important",
        },
      }}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Checkbox
            checked={Array.isArray(value) && value.includes(option.value)}
          />
          <ListItemText primary={option.label} />
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomAutocompleteInput;
