import React from "react";
import { Button, IconButton, CircularProgress } from "@mui/material";
import {
  getButtonStyles,
  getIconButtonStyles,
  getOutlineButtonStyles,
} from "./ButtonConfig/buttonStyle";

const PrimaryButton = ({
  label,
  loading = false,
  onClick,
  size = "medium",
  color = "primary",
  ...rest
}) => {
  console.log(getButtonStyles(size, color));

  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={loading}
      {...rest}
      sx={getButtonStyles(size, color)}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
};

const OutlineSecondaryButton = ({
  label,
  loading = false,
  onClick,
  size = "medium",
  color = "secondary",
  ...rest
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={loading}
      {...rest}
      sx={getOutlineButtonStyles(size, color)}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
};

const SubmitButton = ({
  label,
  loading = false,
  onClick,
  size = "medium",
  color = "primary",
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      type="submit"
      color={color}
      onClick={onClick}
      disabled={loading}
      sx={getButtonStyles(size, color)}
      {...rest}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
};

const CustomIconButton = ({
  icon,
  loading = false,
  color = "primary",
  onClick,
  size = "medium",
  ...rest
}) => {
  return (
    <IconButton
      color={color}
      onClick={onClick}
      sx={getIconButtonStyles(size, color)}
      disabled={loading}
      {...rest}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : icon}
    </IconButton>
  );
};

// button with icon and label

const IconButtonWithLabel = ({
  icon,
  label,
  onClick,
  size = "medium",
  color = "primary",
  loading = false,
  variant = "contained",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={getButtonStyles(size, color)}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
      ) : (
        icon
      )}{" "}
      {label}
    </Button>
  );
};

// outline icon button with label

const OutlineIconButtonWithLabel = ({
  icon,
  label,
  onClick,
  size = "medium",
  color = "secondary",
  loading = false,
  ...rest
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={getOutlineButtonStyles(size, color)}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
      ) : (
        icon
      )}{" "}
      {label}
    </Button>
  );
};

export {
  PrimaryButton,
  SubmitButton,
  CustomIconButton,
  OutlineSecondaryButton,
  IconButtonWithLabel,
  OutlineIconButtonWithLabel,
};
