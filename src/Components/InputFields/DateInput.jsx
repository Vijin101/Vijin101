import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormikContext, useField } from "formik";
import dayjs from "dayjs";
import { getInputStyles } from "./InputStyles/inputstyles";

const DateInput = ({
  label,
  name,
  value,
  onChange,
  className,
  size = "medium",
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

  const parsedValue = isUsingFormik
    ? field.value
      ? dayjs(field.value)
      : null
    : value
    ? dayjs(value)
    : null;

  const handleChange = (newValue) => {
    const isoDate = newValue ? dayjs(newValue).toISOString() : "";

    if (isUsingFormik) {
      formik.setFieldValue(name, isoDate);
    } else {
      onChange?.(isoDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={parsedValue}
        onChange={handleChange}
        format="DD-MM-YYYY"
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

export default DateInput;
