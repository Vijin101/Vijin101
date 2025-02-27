"use client";

import { useLayout } from "../../context/LayoutContext";
import "./SidePageContainer.css";

const SidePageContainer = ({ children }) => {
  const { scrolled, setScrolled } = useLayout();
  return (
    <div className={`${scrolled ? "side-page-top-scrolled" : "side-page-top"}`}>
      {children}
    </div>
  );
};

export default SidePageContainer;
