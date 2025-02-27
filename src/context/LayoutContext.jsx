"use client";
import { createContext, useContext, useMemo, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  const values = useMemo(() => ({ scrolled, setScrolled }), [scrolled]);
  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

export const useLayout = () => {
  return useContext(LayoutContext);
};
