'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap';
import { FaPlus, FaSearch, FaFilter, FaUser, FaCalendar, FaPrayingHands, FaEdit, FaTrash } from 'react-icons/fa';
import Drawer from '../../../../Components/Drawer';
import withPagination from '../../../../Components/Pagination';
import './prayer.css';
import PrayerCard from '../../../../Components/Cards/PrayerCard/PrayerCard';
import DashboardHeader from '../../../../Components/Header/DashboardHeader/DashboardHeader';
import { useLayout } from '../../../../context/LayoutContext';
import PrayerRequestForm from '../../../../Components/Forms/PrayerRequestForm';
import { createPrayerApi, deletePrayerRequestApi, getAllPrayerRequestsApi, updatePrayerRequestApi } from '../../../../service/prayerService';
import { useMutation, useQuery } from '@tanstack/react-query';
import AdminPrayerFilter from '../../../../Components/Filters/AdminPrayerFilter/AdminPrayerFilter';

const PrayerManagement = () => {
    const { showNotification } = useLayout();
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectPrayer, setSelectPrayer] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [drawerTitle, setDrawerTitle] = useState("Add Prayer Request");
    const [filter, setFilter] = useState({
        page: 1,
        limit: 1,
        search: "", // Avoid `null`, use an empty string
        status: "",
        publish: "",

    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');   // '1', '2', or 'all'
    const [filterPublish, setFilterPublish] = useState('all'); // '1', '2', or 'all'


    // fetch prayer request useQuery

    const { data: prayerRequestData, isLoading, error, refetch } = useQuery({
        queryKey: ['prayerRequest', filter], // `filter` ensures re-fetching when values change
        queryFn: () => getAllPrayerRequestsApi(filter), // Directly pass `filter`
        keepPreviousData: true,
    });


    // create prayer request useMutation
    const { mutate: createPrayerRequest, isLoading: createLoading } = useMutation({
        mutationFn: createPrayerApi,
        onSuccess: () => {
            refetch
            showNotification("Prayer request created successfully", "success");
            setShowDrawer(false); // Close the drawer after successful creation
            setSelectPrayer(null); // Reset selected prayer
            setFormLoading(false); // Reset form loading state
            setDrawerTitle("Add Prayer Request") // Reset drawer title
            refetch(); // Refetch prayer requests after creating a new one
        },
        onError: (error) => {
            showNotification(error?.response?.data?.message || "Failed to create prayer request", "error");
            setFormLoading(false); // Reset form loading state
        },
    });

    // update prayer request useMutation
    const { mutate: updatePrayerRequest, isLoading: updateLoading } = useMutation({
        mutationFn: updatePrayerRequestApi,
        onSuccess: () => {
            showNotification("Prayer request updated successfully", "success");
            setShowDrawer(false); // Close the drawer after successful update
            setSelectPrayer(null); // Reset selected prayer
            setFormLoading(false); // Reset form loading state
            setDrawerTitle("Add Prayer Request") // Reset drawer title
            refetch(); // Refetch prayer requests after updating a prayer request
        },
        onError: (error) => {
            showNotification(error?.response?.data?.message || "Failed to update prayer request", "error");
            setFormLoading(false); // Reset form loading state
        }
    });

    // delete prayer request useMutation
    const { mutate: deletePrayerRequest, isLoading: deleteLoading } = useMutation({
        mutationFn: deletePrayerRequestApi,
        onSuccess: () => {
            showNotification("Prayer request deleted successfully", "success");
            refetch(); // Refetch prayer requests after deleting a prayer request
            setSelectPrayer(null); // Reset selected prayer
            setFormLoading(false); // Reset form loading state
            setDrawerTitle("Add Prayer Request") // Reset drawer title
        },
        onError: (error) => {
            showNotification(error?.response?.data?.message || "Failed to delete prayer request", "error");
            setFormLoading(false); // Reset form loading state
        }
    });



    // Sample prayer requests data
    const prayers = [
        {
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "name": "John Doe",
            "phone_number": "1234567890",
            "email": "abc@gmail.com",
            "subject": "Prayer for healing",
            "message": "I need prayer for my health",
            "status": "1",
            "publish": "2",
            "createdBy": "123e4567-e89b-12d3-a456-426614174000",
            "createdAt": "2023-10-01T12:00:00Z",
            "updatedAt": "2023-10-01T12:00:00Z"
        },
        {
            "id": "223e4567-e89b-12d3-a456-426614174001",
            "name": "Jane Smith",
            "phone_number": "9876543210",
            "email": "jane@example.com",
            "subject": "Financial breakthrough",
            "message": "Praying for a job opportunity and stable finances.",
            "status": "1",
            "publish": "1",
            "createdBy": "223e4567-e89b-12d3-a456-426614174001",
            "createdAt": "2023-11-05T09:30:00Z",
            "updatedAt": "2023-11-05T09:30:00Z"
        },
        {
            "id": "323e4567-e89b-12d3-a456-426614174002",
            "name": "Samuel David",
            "phone_number": "7778889990",
            "email": "samuel@church.org",
            "subject": "Prayer for family peace",
            "message": "Please pray for unity and peace in my family.",
            "status": "0",
            "publish": "2",
            "createdBy": "323e4567-e89b-12d3-a456-426614174002",
            "createdAt": "2024-01-12T14:15:00Z",
            "updatedAt": "2024-01-12T14:15:00Z"
        },
        {
            "id": "423e4567-e89b-12d3-a456-426614174003",
            "name": "Lucy Thomas",
            "phone_number": "4445556666",
            "email": "lucy.t@example.net",
            "subject": "Healing from surgery",
            "message": "Recovering from recent surgery, need strength and healing.",
            "status": "1",
            "publish": "1",
            "createdBy": "423e4567-e89b-12d3-a456-426614174003",
            "createdAt": "2024-02-20T07:45:00Z",
            "updatedAt": "2024-02-20T07:45:00Z"
        }
    ]


    // Filter prayers based on search term and category
    const filteredPrayers = prayers.filter(prayer => {
        const matchesSearch =
            prayer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prayer.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prayer.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prayer.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || prayer.status === filterStatus;
        const matchesPublish = filterPublish === 'all' || prayer.publish === filterPublish;

        return matchesSearch && matchesStatus && matchesPublish;
    });

    const transformPrayerFormData = (formData) => {
        return {
            ...formData,
            status: formData.status ? "2" : "1",   // "2" for resolved, "1" for pending
            publish: formData.publish ? "1" : "2", // "1" for public, "2" for private
        };
    };

    const handleAddPrayer = (formData) => {
        console.log('New prayer data:', formData);
        const transformedData = transformPrayerFormData(formData); // avoid mutating original

        setFormLoading(true); // Set form loading state to true

        if (selectPrayer) {
            updatePrayerRequest({ id: selectPrayer.request_id, data: transformedData });
        } else {
            createPrayerRequest(transformedData);
        }
    };



    const handleDeletePrayer = (prayerId) => {
        // Handle deleting prayer request
        console.log('Delete prayer:', prayerId);
        deletePrayerRequest(prayerId);
    };

    const handleDrawer = (prayer, type = "add") => {
        if (type == "add") {
            setDrawerTitle("Add Prayer Request")
        } else {
            setDrawerTitle("Edit Prayer Request")
            setSelectPrayer(prayer);
        }
        setShowDrawer(true)
    }

    // Status mapping
    const getStatusBadge = (status) => {
        const statusMap = {
            "0": { color: "warning", label: "Pending" },
            "1": { color: "success", label: "Active" },
            "2": { color: "error", label: "Answered" }
        };

        const { color, label } = statusMap[status] || { color: "default", label: "Unknown" };

        return (
            <Badge
                color={color}
                variant="standard"
                sx={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    backgroundColor: `${color}.main`,
                    color: "white"
                }}
            >
                {label}
            </Badge>
        );
    };

    // Publish mapping
    const getPublishBadge = (publish) => {
        const publishMap = {
            "1": { color: "primary", label: "Published" },
            "2": { color: "info", label: "Hidden" }
        };

        const { color, label } = publishMap[publish] || { color: "default", label: "Unknown" };

        return (
            <Badge
                color={color}
                variant="standard"
                sx={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    backgroundColor: `${color}.main`,
                    color: "white"
                }}
            >
                {label}
            </Badge>
        );
    };



    const PrayerList = ({ data = [], isLoading }) => {
        if (isLoading) {
            return (
                <div className="text-center py-5">

                    <p className="mt-3 text-muted">Loading prayer requests...</p>
                </div>
            );
        }

        return (
            <Row>
                {data && data.length > 0 ? (
                    data.map((prayer) => (
                        <Col key={prayer.id} md={6} lg={4} className="mb-4">
                            <PrayerCard
                                prayer={prayer}
                                handleEditPrayer={handleDrawer}
                                handleDeletePrayer={handleDeletePrayer}
                                getCategoryBadge={getPublishBadge}
                                getStatusBadge={getStatusBadge}
                            />
                        </Col>
                    ))
                ) : (
                    <Col>
                        <Card className="text-center py-5">
                            <Card.Body>
                                <h4 className="text-muted">No prayer requests found</h4>
                                <p className="text-muted">Try adjusting your search or filter criteria</p>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        );
    };


    const PaginatedPrayerList = withPagination(PrayerList);

    return (
        <Container fluid className="prayer-management">
            <DashboardHeader title="Prayer Request Management" isButton={true} onClick={() => handleDrawer(null, "add")} icon={<FaPlus className="me-2" />} label={"New Request"} />

            <AdminPrayerFilter filter={filter} setFilter={setFilter} />

            <PaginatedPrayerList
                data={prayerRequestData?.data?.prayers || []}
                itemsPerPage={filter.limit}
                setFilter={setFilter}
                filter={filter}
                isLoading={isLoading}
                totalPages={prayerRequestData?.data?.totalPages || 0}
            />

            <Drawer
                show={showDrawer}
                title={drawerTitle}
                onHide={() => { setShowDrawer(false), setSelectPrayer(null) }}
                size="lg"
            >
                {/* Prayer request form will go here */}
                <PrayerRequestForm
                    onSubmit={handleAddPrayer}
                    onCancel={() => { setShowDrawer(false), setSelectPrayer(null) }}
                    initialData={selectPrayer}
                    loading={formLoading}
                />
            </Drawer>
        </Container>
    );
};

export default PrayerManagement; 