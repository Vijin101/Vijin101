import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
import { themeColors } from "../../config/themeColors";
import { CustomIconButton } from "../Buttons/Button";

const tableStyles = {
  small: {
    header: {
      fontSize: "14px",
      padding: "6px",
      backgroundColor: themeColors.primary,
      color: themeColors.backgroundLight,
    },
    cell: {
      fontSize: "12px",
      padding: "4px",
      backgroundColor: themeColors.backgroundMain,
      color: themeColors.textDark,
    },
    button: { fontSize: "10px", padding: "4px 8px" },
  },
  medium: {
    header: {
      fontSize: "16px",
      padding: "10px",
      backgroundColor: themeColors.primary,
      color: themeColors.backgroundLight,
    },
    cell: {
      fontSize: "14px",
      padding: "8px",
      backgroundColor: themeColors.backgroundMain,
      color: themeColors.textDark,
    },
    button: { fontSize: "12px", padding: "6px 12px" },
  },
  large: {
    header: {
      fontSize: "18px",
      padding: "12px",
      backgroundColor: themeColors.primary,
      color: themeColors.backgroundLight,
    },
    cell: {
      fontSize: "16px",
      padding: "10px",
      backgroundColor: themeColors.backgroundMain,
      color: themeColors.textDark,
    },
    button: { fontSize: "14px", padding: "8px 16px" },
  },
};

const DataTable = ({ data, loading, columns, actions, size = "large" }) => {
  const styles = tableStyles[size] || tableStyles.medium;
  const [selectedItems, setSelectedItems] = useState([]);

  // Ensure each row has a unique id (if missing, assign one based on index)
  const formattedData = data.map((item, index) => ({
    ...item,
    id: item.id || `row-${index}`,
  }));

  const handleSelect = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 400, overflow: "auto" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...styles.header, width: "5%" }}>
                <Checkbox
                  checked={selectedItems.length === formattedData.length}
                  onChange={() =>
                    setSelectedItems(
                      selectedItems.length === formattedData.length
                        ? []
                        : formattedData.map((item) => item.id)
                    )
                  }
                />
              </TableCell>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  sx={{ ...styles.header, minWidth: col.width || "150px" }}
                >
                  {col.label}
                </TableCell>
              ))}
              <TableCell
                sx={{
                  ...styles.header,
                  position: "sticky",
                  right: 0,
                  background: themeColors.primary,
                  zIndex: 2,
                  minWidth: "150px",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : formattedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">
                  <Typography>No records found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              formattedData.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell sx={styles.cell}>
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  </TableCell>
                  {columns.map((col, colIndex) => (
                    <TableCell
                      key={colIndex}
                      sx={{ ...styles.cell, minWidth: col.width || "150px" }}
                    >
                      {item[col.key] ?? "-"}
                    </TableCell>
                  ))}
                  <TableCell
                    sx={{
                      ...styles.cell,
                      position: "sticky",
                      right: 0,
                      background: themeColors.background,
                      zIndex: 1,
                      minWidth: "150px",
                      gap: "8px",
                    }}
                  >
                    {actions.map((action, actionIndex) => (
                      <CustomIconButton
                        key={`${item.id}-${actionIndex}`}
                        color={action.color}
                        sx={styles.button}
                        onClick={() => action.onClick(item)}
                        icon={action.icon}
                      />
                    ))}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
