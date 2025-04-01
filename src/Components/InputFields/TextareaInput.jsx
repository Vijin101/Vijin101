import React, { useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import { getTextareaStyles } from "./InputStyles/inputstyles";

const TextareaInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  size = "medium",
  ...rest
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset height to recalculate
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to content height
    }
  }, [value]); // Runs when `value` changes

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      multiline
      inputRef={textAreaRef} // Attach ref for height adjustment
      className={`${className} mb-4`}
      sx={getTextareaStyles(size)}
      {...rest}
    />
  );
};

export default TextareaInput;
