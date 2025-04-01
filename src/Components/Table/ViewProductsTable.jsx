import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
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

const ViewProductsTable = ({
  products,
  loading,
  columns,
  actions,
  size = "large",
}) => {
  const styles = tableStyles[size] || tableStyles.medium;
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 400, overflow: "auto" }}
      >
        <Table stickyHeader>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...styles.header, width: "5%" }}>
                <Checkbox
                  sx={{ ...styles.header }}
                  checked={selectedProducts.includes("")}
                  onChange={() => handleSelect("")}
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
              {/* Fixed Actions Column */}
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

          {/* Table Body */}
          <TableBody>
            {/* Loading State */}
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">
                  <Typography>
                    No products found matching the filters.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.product_id}>
                  {/* Checkbox for Selection */}
                  <TableCell sx={styles.cell}>
                    <Checkbox
                      checked={selectedProducts.includes(product.product_id)}
                      onChange={() => handleSelect(product.product_id)}
                    />
                  </TableCell>

                  {/* Dynamic Columns */}
                  {columns.map((col, colIndex) => (
                    <TableCell
                      key={colIndex}
                      sx={{ ...styles.cell, minWidth: col.width || "150px" }}
                    >
                      {product[col.key] ?? "-"}
                    </TableCell>
                  ))}

                  {/* Fixed Actions Column */}
                  <TableCell
                    sx={{
                      ...styles.cell,
                      position: "sticky",
                      right: 0,
                      background: themeColors.background,
                      zIndex: 1,
                      minWidth: "150px",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    {actions.map((action, index) => (
                      <CustomIconButton
                        key={index}
                        color={action.color}
                        sx={{
                          ...styles.button,
                        }}
                        onClick={() => action.onClick(product)}
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

export default ViewProductsTable;
