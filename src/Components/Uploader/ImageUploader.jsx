import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { OutlineSecondaryButton } from "../Button/Button";

const ImageUploader = ({ handleImageChange }) => {
  const fileInputRef = useRef(null);

  return (
    <>
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        id="image-upload"
        type="file"
        multiple
        onChange={handleImageChange}
      />

      {/* Button Click Triggers File Input */}
      <OutlineSecondaryButton
        type="button"
        variant="contained"
        fullWidth
        label={"Upload Images"}
        color="primary"
        onClick={() => fileInputRef.current.click()}
      />
    </>
  );
};

export default ImageUploader;
