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
import TextInput from '../../../../Components/InputFields/TextInput';
import CustomAutocompleteInput from '../../../../Components/InputFields/CustomAutocompleteInput';
import { IconButtonWithLabel } from '../../../../Components/Buttons/Button';
import { useLayout } from '../../../../context/LayoutContext';
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

    useEffect(() => {
        refetch();
    }, [filter]);

    console.log(usersData);
    console.log(isLoading);

    const handleAddMember = (formData) => {
        console.log(formData, "formData");
        if (selectedMember) {
            updateUser({ id: selectedMember.user_id, data: formData });
        } else {
            createUser(formData);
        }
    };

    const handleEditMember = (member) => {
        setSelectedMember(member);
        setShowDrawer(true);
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

    return (
        <Container fluid className="members-page py-4">
            {/* Header Section */}
            <Row className="mb-4 align-items-center">
                <Col>
                    <h4 className="page-title mb-0">Members Management</h4>
                    <p className="page-subtitle">Manage and track church members</p>
                </Col>
                <Col xs="auto">
                    <IconButtonWithLabel
                        label="Add New Member"
                        onClick={() => handleDrawer(null, "add")}
                        icon={<FaPlus className="me-2" />}
                    />
                </Col>
            </Row>

            {/* Stats Cards */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Total Members</div>
                            <div className="stat-value">1,234</div>
                            <div className="stat-change positive">+12% from last month</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Active Members</div>
                            <div className="stat-value">1,021</div>
                            <div className="stat-change positive">+5% from last month</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">New Members</div>
                            <div className="stat-value">48</div>
                            <div className="stat-change positive">+8% from last month</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="stat-label">Attendance Rate</div>
                            <div className="stat-value">85%</div>
                            <div className="stat-change positive">+3% from last month</div>
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
                            <CustomAutocompleteInput options={[{ label: "Active", value: "1" }, { label: "Inactive", value: "2" }, { label: "Blocked", value: "3" }]} size="small" label="User Status" placeholder="Select user status" value={userStatus} onChange={(e) => { setUserStatus(e); setFilter({ ...filter, user_status: e.map(item => item.value) }) }} />
                        </Col>
                        <Col md={2}>
                            <CustomAutocompleteInput options={[{ label: "User", value: "User" }, { label: "Admin", value: "Admin" }, { label: "Super Admin", value: "Super Admin" }]} size="small" label="Role" placeholder="Select role" value={role} onChange={(e) => { setRole(e); setFilter({ ...filter, role_name: e.map(item => item.value) }) }} />
                        </Col>
                        <Col md={5} className="text-md-end">
                            <Button variant="outline-secondary" className="me-2">
                                <FaDownload className="me-2" />
                                Export
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* set data after loading */}

            <Card className="members-table-card">
                <Card.Body className="p-0">
                    <PaginatedMembersTable
                        size="medium"
                        data={usersData?.data?.users || []}
                        itemsPerPage={filter.limit}
                        onEdit={handleDrawer}
                        totalPages={usersData?.data?.totalPages}
                        setFilter={setFilter}
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