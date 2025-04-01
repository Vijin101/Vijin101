import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomSnackbar = ({
  open,
  handleClose,
  message,
  severity,
  variant = "filled",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000} // Closes after 3 seconds
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // Adjust position
    >
      <Alert
        onClose={handleClose}
        severity={severity || "info"}
        variant={variant}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
