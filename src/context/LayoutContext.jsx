"use client";
import { createContext, useContext, useMemo, useState } from "react";
import CustomSnackbar from "../Components/Notification/CustomSnackbar";

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showNotification = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const values = useMemo(
    () => ({ scrolled, setScrolled, showNotification }),
    [scrolled, snackbar]
  );

  return (
    <LayoutContext.Provider value={values}>
      {children}
      {snackbar.open && (
        <CustomSnackbar
          open={snackbar.open}
          handleClose={handleClose}
          message={snackbar.message}
          severity={snackbar.severity}
        />
      )}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

export const useLayout = () => {
  return useContext(LayoutContext);
};
