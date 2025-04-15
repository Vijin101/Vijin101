import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Typography, CircularProgress } from '@mui/material';
import { FaUserCircle, FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from 'react-icons/fa';
import { Badge } from 'react-bootstrap'; // Assuming react-bootstrap is setup
import { themeColors } from '../../config/themeColors'; // Adjust import path
import { CustomIconButton } from '../Buttons/Button'; // Adjust import path
// Removed CheckboxInput import as MRT handles selection checkboxes

// --- Helper Function (can be outside component) ---
const getStatusBadgeVariant = (status) => {
    switch (String(status)) { // Ensure comparison with strings
        case '1': return 'success';
        case '2': return 'danger';
        case '3': return 'warning';
        default: return 'secondary';
    }
};

// --- Mapping Size to MRT Density ---
const mapSizeToDensity = (size) => {
    switch (size) {
        case 'small': return 'compact';
        case 'large': return 'spacious';
        case 'medium':
        default: return 'comfortable';
    }
};

// --- Main Component ---
const MembersTable = ({ data = [], onEdit, onDelete, loading, size = "small" }) => {

    // Define table columns using MRT's column definition format
    const columns = useMemo(
        () => [
            {
                accessorKey: 'fullName', // Accessor maps to the data key
                header: 'Name',
                // size: 250, // Example size adjustment
                Cell: ({ row }) => ( // Custom cell renderer
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <FaUserCircle size={24} /> {/* Adjust icon size as needed */}
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{row.original.fullName}</Typography>
                            <Typography variant="body2" sx={{ color: themeColors.textLight }}>{row.original.email}</Typography>
                        </Box>
                    </Box>
                ),
            },
            {
                accessorKey: 'phoneNumber',
                header: 'Phone Number',
                Cell: ({ cell }) => cell.getValue() || 'N/A', // Handle null/empty values
            },
            {
                // Use accessorFn for nested or computed values safely
                accessorFn: (row) => row.role?.role_name || 'N/A',
                id: 'role_name', // id is required when using accessorFn
                header: 'Role',
                size: 40, // Adjust size
            },
            {
                accessorKey: 'email_verification',
                header: 'Email Verified',
                size: 50, // Adjust size
                Cell: ({ cell }) => (
                    <Box sx={{ textAlign: 'center' }}>
                        {cell.getValue() ? <FaCheckCircle color={themeColors.success} /> : <FaTimesCircle color={themeColors.danger} />}
                    </Box>
                ),
                muiTableHeadCellProps: { // Center header text
                    align: 'center',
                },
            },
            {
                accessorKey: 'phone_verification',
                header: 'Phone Verified',
                size: 60, // Adjust size
                Cell: ({ cell }) => (
                    <Box sx={{ textAlign: 'center' }}>
                        {cell.getValue() ? <FaCheckCircle color={themeColors.success} /> : <FaTimesCircle color={themeColors.danger} />}
                    </Box>
                ),
                muiTableHeadCellProps: { // Center header text
                    align: 'center',
                },
            },
            {
                accessorKey: 'user_status',
                header: 'Status',
                size: 80, // Adjust size
                Cell: ({ cell }) => {
                    const status = String(cell.getValue()); // Ensure string for comparison
                    const text = status === '1' ? 'Active' : status === '2' ? 'Inactive' : 'Blocked';
                    return (
                        <Box sx={{ textAlign: 'center' }}>
                            <Badge bg={getStatusBadgeVariant(status)} className="status-badge" pill>
                                {text}
                            </Badge>
                        </Box>
                    );
                },
                muiTableHeadCellProps: { // Center header text
                    align: 'center',
                },
            },
            // Actions column is handled by enableRowActions and renderRowActions below
        ],
        [onEdit, onDelete] // Dependencies for useMemo (if handlers change)
    );

    // Map the size prop to MRT density
    const density = mapSizeToDensity(size);

    // Apply styling similar to original tableStyles using MRT props
    const muiTableStyles = {
        // Apply header styles
        muiTableHeadCellProps: {
            sx: {
                backgroundColor: themeColors.primary,
                color: themeColors.backgroundLight,
                fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px',
                padding: size === 'small' ? '6px 16px' : size === 'medium' ? '10px 16px' : '12px 16px', // Adjust padding as needed by MRT
            },
        },
        // Apply general cell styles (can be overridden per column)
        muiTableBodyCellProps: {
            sx: {
                backgroundColor: themeColors.backgroundMain,
                color: themeColors.textDark,
                fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
                padding: size === 'small' ? '4px 16px' : size === 'medium' ? '8px 16px' : '10px 16px', // Adjust padding
            },
        },
        // Apply styles to the container
        muiTablePaperProps: {
            elevation: 0, // Remove paper shadow if desired
            sx: {
                border: `1px solid ${themeColors.border}`, // Example border
            }
        },
    };

    return (
        <MaterialReactTable
            columns={columns}
            data={data ?? []} // Provide default empty array if data is null/undefined
            enableRowSelection // Enable checkbox selection
            enableRowActions // Enable the built-in actions column
            positionActionsColumn="last" // Position actions column at the end

            // === State ===
            state={{
                isLoading: loading,
                showProgressBars: loading, // Show linear progress bars during loading
                // density: density // Set density based on size prop (using initialState below is often better for initial render)
            }}

            // === Initial State ===
            initialState={{
                density: density, // Set initial density
                // pagination: { pageSize: 10, pageIndex: 0 }, // Optional: Set initial pagination
                // showGlobalFilter: true, // Optional: Enable global search
            }}



            // === Styling ===
            {...muiTableStyles} // Apply the custom styles

            // === Features Customization ===
            muiCircularProgressProps={{ // Customize the loading spinner
                color: 'primary',
                size: 60,
            }}
            renderEmptyRowsFallback={() => ( // Custom message for no data
                <Box sx={{ padding: '20px', textAlign: 'center' }}>
                    <Typography>No members found.</Typography>
                </Box>
            )}

            // === Row Actions ===
            renderRowActions={({ row }) => (
                <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <CustomIconButton
                        icon={<FaEdit />}
                        size="small" // Adjust button size if needed based on table density
                        onClick={() => onEdit(row.original, "edit")}
                        tooltip="Edit Member" // Add tooltip for accessibility
                    />
                    <CustomIconButton
                        icon={<FaTrash />}
                        size="small" // Adjust button size
                        onClick={() => onDelete(row.original.user_id)}
                        color="error" // Use MUI color prop for consistency if needed in CustomIconButton
                        tooltip="Delete Member" // Add tooltip
                    />
                </Box>
            )}
            enableColumnFilters={false}
            enableGlobalFilter={false}
            enableFullScreenToggle={false}
            enableColumnActions={false}
            enableColumnDragging={false}
            enableColumnOrdering={false}
            enableColumnPinning={true}
            enableColumnResizing={false}
            enableHiding={false}
            enableDensityToggle={false}
            enableColumnFilterModes={false}
            enableColumnFilterLocalization={false}
            enableColumnFilterSearch={false}
            enableColumnFilterSearchDebounce={false}
            enableColumnFilterSearchDebounceTimeout={0}
            enableTopToolbar={false}
            enablePagination={false}
            enableBottomToolbar={false}




        // Optional: Control selection state if needed externally
        // onRowSelectionChange={setRowSelection} // Connect to your own state management
        // state={{ rowSelection }} // Pass your selection state object

        // Optional: Top Toolbar Customization
        /*
        renderTopToolbarCustomActions={({ table }) => (
            <Button
                variant="contained"
                onClick={() => {
                    console.log(table.getSelectedRowModel().flatRows.map(row => row.original.user_id));
                    // Add logic for bulk actions
                }}
                disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
            >
                Bulk Action
            </Button>
        )}
        */
        />
    );
};

export default MembersTable;