import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    CircularProgress,
    Typography,
    Box,
} from '@mui/material';
import { FaUserCircle, FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { themeColors } from '../../config/themeColors';
import { CustomIconButton } from '../Buttons/Button';
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

const MembersTable = ({ data, onEdit, onDelete, loading, size = "small" }) => {
    const [selectedMembers, setSelectedMembers] = useState([]);
    console.log(loading, "loading");

    const handleSelect = (memberId) => {
        setSelectedMembers((prevSelected) =>
            prevSelected.includes(memberId)
                ? prevSelected.filter((id) => id !== memberId)
                : [...prevSelected, memberId]
        );
    };

    const columns = [
        { label: 'Name', key: 'fullName' },
        { label: 'Phone Number', key: 'phoneNumber' },
        { label: 'Role', key: 'role_name' },
        { label: 'Email Verified', key: 'email_verification' },
        { label: 'Phone Verified', key: 'phone_verification' },
        { label: 'Status', key: 'user_status' },
        { label: 'Actions', key: 'actions' },
    ];

    const getStatusBadgeVariant = (status) => {
        switch (status) {
            case '1':
                return 'success';
            case '2':
                return 'danger';
            case '3':
                return 'warning';
            default:
                return 'secondary';
        }
    };

    return (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tableStyles[size].header}>
                                <Checkbox
                                    checked={selectedMembers.length === data.length}
                                    onChange={() => {
                                        if (selectedMembers.length === data.length) {
                                            setSelectedMembers([]);
                                        } else {
                                            setSelectedMembers(data.map(member => member.user_id));
                                        }
                                    }}
                                />
                            </TableCell>
                            {columns.map((col, index) => (
                                <TableCell key={index} sx={tableStyles[size].header}>{col.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={columns.length + 1} align="center">
                                    <CircularProgress />
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length + 1} align="center">
                                    <Typography>No members found.</Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell sx={tableStyles[size].cell}>
                                        <Checkbox
                                            checked={selectedMembers.includes(member.user_id)}
                                            onChange={() => handleSelect(member.user_id)}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableStyles[size].cell}>
                                        <div className="d-flex align-items-center">
                                            <div className="member-avatar me-3">
                                                <FaUserCircle />
                                            </div>
                                            <div className="member-info">
                                                <div className="member-name">{member.fullName}</div>
                                                <div className="member-email">{member.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell sx={tableStyles[size].cell}>{member.phoneNumber || 'N/A'}</TableCell>
                                    <TableCell sx={tableStyles[size].cell}>{member.role?.role_name || 'N/A'}</TableCell>
                                    <TableCell sx={tableStyles[size].cell}>{member.email_verification ? <FaCheckCircle /> : <FaTimesCircle />}</TableCell>
                                    <TableCell sx={tableStyles[size].cell}>{member.phone_verification ? <FaCheckCircle /> : <FaTimesCircle />}</TableCell>
                                    <TableCell sx={tableStyles[size].cell}>
                                        <Badge bg={getStatusBadgeVariant(member.user_status)} className="status-badge">
                                            {member.user_status === '1' ? 'Active' : member.user_status === '2' ? 'Inactive' : 'Blocked'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell sx={tableStyles[size].cell} className="d-flex gap-2">
                                        <CustomIconButton
                                            icon={<FaEdit />}
                                            size="medium"
                                            onClick={() => onEdit(member, "edit")}
                                        />
                                        <CustomIconButton
                                            icon={<FaTrash />}
                                            size="medium"
                                            onClick={() => onDelete(member.user_id)}
                                        />
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

export default MembersTable; 