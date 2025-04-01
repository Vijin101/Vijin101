import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getInputStyles } from "./InputStyles/inputstyles";

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      fullWidth
      className={`${className} mb-4`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={getInputStyles(size)}
      {...rest} // Spread the rest of the props here
    />
  );
};

export default PasswordInput;
