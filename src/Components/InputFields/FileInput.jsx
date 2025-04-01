import React from "react";
import { TextField } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";

const FileInput = ({
  label,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  return (
    <TextField
      type="file"
      label={label}
      variant="outlined"
      fullWidth
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      className={`${className} mb-4`}
      sx={getInputStyles(size)}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default FileInput;
