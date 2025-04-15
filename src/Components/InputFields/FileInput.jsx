import React from "react";
import { TextField, Box, Chip, IconButton } from "@mui/material";
import { getInputStyles } from "./InputStyles/inputstyles";
import ClearIcon from "@mui/icons-material/Clear";

const FileInput = ({
  label,
  onChange,
  className,
  size = "medium",
  value, // Add value prop for the existing file
  ...rest
}) => {
  const [selectedFile, setSelectedFile] = React.useState(value || null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onChange(e); // Propagate the change to parent
  };

  const handleClear = () => {
    setSelectedFile(null);
    // Create a synthetic event to propagate the clear action
    onChange({ target: { files: [] } });
  };

  return (
    <Box>
      <TextField
        type="file"
        label={label}
        variant="outlined"
        fullWidth
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: selectedFile && (
            <IconButton onClick={handleClear} size="small">
              <ClearIcon />
            </IconButton>
          ),
        }}
        className={`${className} mb-4`}
        sx={getInputStyles(size)}
        {...rest}
      />
      {selectedFile && !rest.multiple && (
        <Box mt={1} fontSize="small" color="text.secondary">
          Selected: {selectedFile.name}
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
