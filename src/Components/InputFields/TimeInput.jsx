import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useField, useFormikContext } from "formik";
import dayjs from "dayjs";
import { getInputStyles } from "./InputStyles/inputstyles";

const TimeInput = ({
  label,
  name,
  className,
  size = "medium",
  value,
  onChange,
  helperText,
  ...rest
}) => {
  const formik = useFormikContext?.();
  let field = null;
  let meta = null;

  const isUsingFormik = !!(formik && name);

  if (isUsingFormik) {
    [field, meta] = useField(name);
  }

  const inputValue = isUsingFormik
    ? field.value
      ? dayjs(field.value, "hh:mm A")
      : null
    : value
    ? dayjs(value, "hh:mm A")
    : null;

  const handleChange = (newValue) => {
    const formatted = newValue ? dayjs(newValue).format("hh:mm A") : "";

    if (isUsingFormik) {
      formik.setFieldValue(name, formatted);
    } else {
      onChange?.(formatted);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={inputValue}
        ampm
        onChange={handleChange}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: "outlined",
            className,
            sx: getInputStyles(size),
            InputLabelProps: { shrink: true },
            error: isUsingFormik ? Boolean(meta.touched && meta.error) : false,
            helperText: isUsingFormik ? meta.touched && meta.error : helperText,
            ...rest,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default TimeInput;
