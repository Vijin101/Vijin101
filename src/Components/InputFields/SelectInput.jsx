import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const SelectInput = ({
  field = null, // Comes from Formik's <Field> component (optional)
  form = null, // Formik form object (optional)
  label,
  options,
  className,
  size = "medium",
  placeholder,
  ...rest
}) => {
  const isFormik = Boolean(field && form); // Check if Formik is used

  // If not using Formik, manage state locally
  const [localValue, setLocalValue] = useState("");

  // Extract values from Formik or use local state
  const name = field?.name || rest.name;
  const value = isFormik ? field.value : localValue;
  const error = isFormik
    ? form.touched?.[name] && Boolean(form.errors?.[name])
    : false;
  const helperText = isFormik
    ? (form.touched?.[name] && form.errors?.[name]) || ""
    : "";

  // Handle change event
  const handleChange = (event) => {
    if (isFormik) {
      form.setFieldValue(name, event.target.value);
    } else {
      setLocalValue(event.target.value);
    }
  };

  return (
    <TextField
      select
      label={label}
      name={name}
      value={value ?? ""} // Ensure no uncontrolled input issues
      onChange={handleChange}
      variant="outlined"
      fullWidth
      className={`${className}`}
      sx={getInputStyles(size)}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      {...rest}
    >
      <MenuItem value="" disabled>
        Select an option
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
