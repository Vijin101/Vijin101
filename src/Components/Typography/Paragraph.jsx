import React from "react";

const Paragraph = ({ content, className = "" }) => {
  return <p className={`dynamic-paragraph ${className}`}>{content}</p>;
};

export default Paragraph;
