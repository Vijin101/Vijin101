import React, { useState } from "react";
import { Pagination, Box } from "@mui/material";
import { themeColors } from "./themeColors";

const MaterialCustomePagination = (WrappedComponent) => {
    return ({ items, totalPages, currentPage, onPageChange, ...props }) => {
        const handleChange = (event, value) => onPageChange(value);

        return (
            <Box>
                <WrappedComponent items={items} {...props} />
                <Box display="flex" justifyContent="center" mt={2}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChange}
                        color="primary"
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: themeColors.textDark,
                                "&:hover": {
                                    backgroundColor: themeColors.primaryHover,
                                    color: "white",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: themeColors.primary,
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: themeColors.primaryDark,
                                    },
                                },
                            },
                        }}
                    />
                </Box>
            </Box>
        );
    };
};

export default MaterialCustomePagination;
