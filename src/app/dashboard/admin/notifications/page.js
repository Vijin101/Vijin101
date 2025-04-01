'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap';
import {
    FaPlus,
    FaSearch,
    FaFilter,
    FaBell,
    FaCalendar,
    FaUser,
    FaEdit,
    FaTrash,
    FaExclamationCircle,
    FaExclamation,
    FaInfo
} from 'react-icons/fa';
import Drawer from '../../../../Components/Drawer';
import withPagination from '../../../../Components/Pagination';
import './notifications.css';

const NotificationsManagement = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    // Sample notifications data
    const notifications = [
        {
            id: 1,
            title: 'Sunday Service Reminder',
            description: 'Reminder for the upcoming Sunday service at 10:00 AM. Please arrive early for worship.',
            type: 'service',
            status: 'active',
            priority: 'high',
            date: '2024-03-24',
            author: 'Admin',
            recipients: 'All Members'
        },
        {
            id: 2,
            title: 'Youth Group Meeting',
            description: 'Monthly youth group meeting this Friday at 6:00 PM in the youth center.',
            type: 'event',
            status: 'active',
            priority: 'medium',
            date: '2024-03-25',
            author: 'Youth Leader',
            recipients: 'Youth Members'
        },
        {
            id: 3,
            title: 'Prayer Meeting Update',
            description: 'The prayer meeting has been rescheduled to Wednesday at 7:00 PM.',
            type: 'update',
            status: 'sent',
            priority: 'high',
            date: '2024-03-23',
            author: 'Admin',
            recipients: 'Prayer Group'
        },
        {
            id: 4,
            title: 'Monthly Newsletter',
            description: 'The March newsletter is now available. Please check your email for updates.',
            type: 'newsletter',
            status: 'sent',
            priority: 'low',
            date: '2024-03-22',
            author: 'Admin',
            recipients: 'All Members'
        }
    ];

    // Filter notifications based on search term and type
    const filteredNotifications = notifications.filter(notification => {
        const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notification.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notification.author.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filterType === 'all' || notification.type === filterType;

        return matchesSearch && matchesType;
    });

    const handleAddNotification = (formData) => {
        // Handle adding new notification
        console.log('New notification data:', formData);
        setShowDrawer(false);
    };

    const handleEditNotification = (notification) => {
        // Handle editing notification
        console.log('Edit notification:', notification);
    };

    const handleDeleteNotification = (notificationId) => {
        // Handle deleting notification
        console.log('Delete notification:', notificationId);
    };

    const getStatusBadge = (status) => {
        const statusColors = {
            active: 'primary',
            sent: 'success',
            draft: 'warning'
        };
        return (
            <Badge bg={statusColors[status]} className="status-badge">
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
        );
    };

    const getTypeBadge = (type) => {
        const typeColors = {
            service: 'info',
            event: 'warning',
            update: 'danger',
            newsletter: 'success'
        };
        return (
            <Badge bg={typeColors[type]} className="type-badge">
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
        );
    };

    const getPriorityBadge = (priority) => {
        const priorityIcons = {
            high: <FaExclamationCircle />,
            medium: <FaExclamation />,
            low: <FaInfo />
        };

        return (
            <span className={`notification-priority priority-${priority}`}>
                {priorityIcons[priority]}
                {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
            </span>
        );
    };

    const NotificationList = ({ data = [] }) => {
        if (!data || data.length === 0) {
            return (
                <div className="empty-state">
                    <FaBell size={48} color="var(--accent-color)" className="mb-3" />
                    <h4>No notifications found</h4>
                    <p>Try adjusting your search or filter criteria to find what you're looking for.</p>
                </div>
            );
        }

        return (
            <Row>
                {data.map((notification) => (
                    <Col key={notification.id} md={6} lg={4} className="mb-4">
                        <Card className="notification-card">
                            <div className="notification-priority">
                                {notification.priority === 'high' && <FaExclamationCircle />}
                                {notification.priority === 'medium' && <FaExclamation />}
                                {notification.priority === 'low' && <FaInfo />}
                                {notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)} Priority
                            </div>
                            <h5 className="notification-title">{notification.title}</h5>
                            <div className="notification-badges">
                                {getStatusBadge(notification.status)}
                                {getTypeBadge(notification.type)}
                            </div>
                            <p className="notification-description">{notification.description}</p>
                            <div className="notification-details">
                                <div className="notification-detail-item">
                                    <FaUser />
                                    {notification.author}
                                </div>
                                <div className="notification-detail-item">
                                    <FaCalendar />
                                    {notification.date}
                                </div>
                                <div className="notification-detail-item">
                                    <FaBell />
                                    {notification.recipients}
                                </div>
                            </div>
                            <div className="notification-actions">
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={() => handleEditNotification(notification)}
                                >
                                    <FaEdit />
                                    Edit
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDeleteNotification(notification.id)}
                                >
                                    <FaTrash />
                                    Delete
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    };

    const PaginatedNotificationList = withPagination(NotificationList);

    return (
        <div className="notifications-management">
            <div className="header-section">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col>
                            <h2 className="page-title">Notifications Management</h2>
                            <p className="header-description">
                                Create and manage notifications to keep your church members informed and engaged.
                            </p>
                        </Col>
                        <Col xs="auto">
                            <Button
                                variant="primary"
                                onClick={() => setShowDrawer(true)}
                                className="add-notification-btn"
                            >
                                <FaPlus className="me-2" />
                                Add New Notification
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid>
                <div className="filters-section">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="search-box">
                                <Form.Control
                                    type="text"
                                    placeholder="Search notifications..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <FaSearch className="search-icon" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="filter-box">
                                <Form.Select
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                >
                                    <option value="all">All Types</option>
                                    <option value="service">Services</option>
                                    <option value="event">Events</option>
                                    <option value="update">Updates</option>
                                    <option value="newsletter">Newsletters</option>
                                </Form.Select>
                                <FaFilter className="filter-icon" />
                            </Form.Group>
                        </Col>
                    </Row>
                </div>

                <PaginatedNotificationList data={filteredNotifications} itemsPerPage={6} />
            </Container>

            <Drawer
                show={showDrawer}
                onHide={() => setShowDrawer(false)}
                title="Add New Notification"
                size="lg"
            >
                {/* Notification form will go here */}
            </Drawer>
        </div>
    );
};

export default NotificationsManagement; 