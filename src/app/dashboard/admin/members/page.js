'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaUserPlus, FaSearch, FaFilter, FaDownload, FaPlus } from 'react-icons/fa';
import withPagination from '../../../../Components/Pagination';
import MembersTable from '../../../../Components/Table/MembersTable';
import Drawer from '../../../../Components/Drawer';
import MemberForm from '../../../../Components/Forms/MemberForm';
import './members.css';
import { useQuery, useMutation } from '@tanstack/react-query';
import { createUserApi, deleteUserApi, getAllUsersApi, updateUserApi } from '../../../../service/userService';
import { getUserStatsAnalytics } from '../../../../service/analyticsService';
import TextInput from '../../../../Components/InputFields/TextInput';
import CustomAutocompleteInput from '../../../../Components/InputFields/CustomAutocompleteInput';
import { SecondaryButton, OutlineSecondaryButton, } from '../../../../Components/Buttons/Button';
import { useLayout } from '../../../../context/LayoutContext';
import { Skeleton } from '@mui/material';
import DashboardHeader from '../../../../Components/Header/DashboardHeader/DashboardHeader';
// Create paginated version of MembersTable
const PaginatedMembersTable = withPagination(MembersTable);

const MembersManagement = () => {
    const { showNotification } = useLayout();
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [drawerTitle, setDrawerTitle] = useState("Add Member")
    const [filter, setFilter] = useState({
        page: 1,
        limit: 10,
        search: "", // Avoid `null`, use an empty string
        role_name: [], // Empty array instead of null
        user_status: [], // Empty array instead of null

    });

    const [userStatus, setUserStatus] = useState([]);
    const [role, setRole] = useState([]);

    const { data: usersData, isLoading, error, refetch } = useQuery({
        queryKey: ['users', filter], // `filter` ensures re-fetching when values change
        queryFn: () => getAllUsersApi(filter), // Directly pass `filter`
        keepPreviousData: true,
    });

    const { data: analyticsData, isLoading: isAnalyticsLoading, error: analyticsError, refetch: refetchAnalytics } = useQuery({
        queryKey: ['analytics'],
        queryFn: getUserStatsAnalytics,
        keepPreviousData: true,
    });

    const { mutate: createUser, isPending: isCreating } = useMutation({
        mutationFn: createUserApi,
        onSuccess: () => {
            console.log('User created successfully');
            refetch();
            setShowDrawer(false);
            setSelectedMember(null);
            setDrawerTitle("Add Member");
            showNotification("User created successfully", "success");
        },
        onError: (error) => {
            console.error('Error creating user:', error);
            showNotification("Error creating user", "error");
        },
    });

    const { mutate: updateUser, isPending: isUpdating } = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            console.log('User updated successfully');
            refetch();
            setShowDrawer(false);
            setSelectedMember(null);
            setDrawerTitle("Add Member");
            showNotification("User updated successfully", "success");
        },
        onError: (error) => {
            console.error('Error updating user:', error);
            showNotification("Error updating user", "error");
        },
    });

    const { mutate: deleteUser, isPending: isDeleting } = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: () => {
            console.log('User deleted successfully');
            refetch();
            showNotification("User deleted successfully", "success");
        },
        onError: (error) => {
            console.error('Error deleting user:', error);
            showNotification("Error deleting user", "error");
        },
    });

    const handleAddMember = (formData) => {
        console.log(formData, "formData");
        if (selectedMember) {
            updateUser({ id: selectedMember.user_id, data: formData });
        } else {
            createUser(formData);
        }
    };


    const handleDeleteMember = (memberId) => {
        // Handle deleting member
        console.log('Delete member:', memberId);
        deleteUser({ id: memberId, deleteType: "hard" });
    };

    const handleDrawer = (member, type = "add") => {
        if (type == "add") {
            setDrawerTitle("Add Member")
        } else {
            setDrawerTitle("Edit Member")
            setSelectedMember(member);
        }
        setShowDrawer(true)
    }

    const handleResetFilter = () => {
        setFilter({ ...filter, search: "", role_name: [], user_status: [] })
        setUserStatus([])
        setRole([])
    }

    const handleExport = () => {
        console.log("Export");
        getAllUsersApi({ ...filter, download: "1" }).then((res) => {
            // Check the response structure
            console.log("API Response:", res);

            // Ensure res.data.content is a valid buffer
            if (res.data && res.data.content) {
                // Convert the Buffer to Uint8Array
                const uint8Array = new Uint8Array(res.data.content.data); // Access the data array

                const blob = new Blob([uint8Array], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = res.data.filename || 'default_filename.xlsx'; // Fallback filename
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error("Invalid response structure:", res);
            }
        }).catch(error => {
            console.error("Error fetching users:", error);
        });
    };

    console.log(analyticsData);
    return (
        <Container className="members-page">
            {/* Header Section */}

            <DashboardHeader title="Members Management" isButton={true} onClick={() => handleDrawer(null, "add")} icon={<FaPlus className="me-2" />} label={"Add New Member"} />


            {/* Stats Cards */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Total Members</div>
                            {/* better loading   */}
                            {isAnalyticsLoading ? <Skeleton variant="text" className="stat-value" /> : <div className="stat-value">{analyticsData?.data?.totalUsers}</div>}
                            <div className="stat-change positive">{analyticsData?.data?.lastMonthUsersPercentageMessage}</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Active Members</div>
                            {isAnalyticsLoading ? <Skeleton variant="text" className="stat-value" /> : <div className="stat-value">{analyticsData?.data?.activeUsers}</div>}
                            <div className="stat-change positive">{analyticsData?.data?.activeUsersPercentageMessage}</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">New Members</div>
                            {isAnalyticsLoading ? <Skeleton variant="text" className="stat-value" /> : <div className="stat-value">{analyticsData?.data?.newUsers}</div>}
                            <div className="stat-change positive">{analyticsData?.data?.newUsersPercentageMessage}</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Attendance Rate</div>
                            {isAnalyticsLoading ? <Skeleton variant="text" className="stat-value" /> : <div className="stat-value">{analyticsData?.data?.activeUsersInLast30DaysPercentage}%</div>}
                            <div className="stat-change positive">{analyticsData?.data?.activeUsersInLast30DaysPercentageMessage}</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Search and Filter Section */}
            <Card className="mb-4">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col md={3}>
                            <TextInput size="small" label="Search" placeholder="Search members..." value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} iconLeft={<FaSearch />} />
                        </Col>
                        <Col md={2}>
                            <CustomAutocompleteInput options={[{ label: "Active", value: "1" }, { label: "Inactive", value: "2" }, { label: "Blocked", value: "3" }]} size="small" label="User Status" placeholder="Select user status" value={userStatus} onChange={(selectedValues) => { setUserStatus(selectedValues); setFilter({ ...filter, user_status: selectedValues }) }} />
                        </Col>
                        <Col md={2}>
                            <CustomAutocompleteInput
                                options={[
                                    { label: "User", value: "User" },
                                    { label: "Admin", value: "Admin" },
                                    { label: "Super Admin", value: "Super Admin" }
                                ]}
                                size="small"
                                label="Role"
                                placeholder="Select role"
                                value={role}
                                onChange={(selectedValues) => {

                                    setRole(selectedValues);

                                    setFilter({ ...filter, role_name: selectedValues })
                                }}
                            />
                        </Col>
                        <Col md={5} className="text-md-end">
                            {/* reset filter     */}
                            <OutlineSecondaryButton label="Reset" className="me-2" size="small" color="primary" onClick={handleResetFilter} />
                            <OutlineSecondaryButton label="Export" size="small" color="primary" onClick={handleExport} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* set data after loading */}

            <Card className="members-table-card">
                <Card.Body className="p-0">
                    <PaginatedMembersTable
                        size="small"
                        data={usersData?.data?.users || []}
                        itemsPerPage={filter.limit}
                        onEdit={handleDrawer}
                        totalPages={usersData?.data?.totalPages}
                        setFilter={setFilter}
                        filter={filter}
                        loading={isLoading}
                        onDelete={handleDeleteMember}
                    />
                </Card.Body>
            </Card>

            <Drawer
                show={showDrawer}
                onHide={() => setShowDrawer(false)}
                title={drawerTitle}
                size="lg"
            >
                <MemberForm
                    onSubmit={handleAddMember}
                    onCancel={() => { setShowDrawer(false), setSelectedMember(null) }}
                    initialData={selectedMember}
                />
            </Drawer>
        </Container>
    );
};

export default MembersManagement; 