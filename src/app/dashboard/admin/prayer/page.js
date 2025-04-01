'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap';
import { FaPlus, FaSearch, FaFilter, FaUser, FaCalendar, FaPrayingHands, FaEdit, FaTrash } from 'react-icons/fa';
import Drawer from '../../../../Components/Drawer';
import withPagination from '../../../../Components/Pagination';
import './prayer.css';

const PrayerManagement = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    // Sample prayer requests data
    const prayers = [
        {
            id: 1,
            title: 'Health Recovery',
            description: 'Prayer request for complete healing and recovery from illness.',
            requester: 'John Smith',
            date: '2024-03-24',
            category: 'health',
            status: 'active',
            prayerCount: 12
        },
        {
            id: 2,
            title: 'Family Guidance',
            description: 'Seeking divine guidance for important family decisions.',
            requester: 'Sarah Johnson',
            date: '2024-03-23',
            category: 'family',
            status: 'active',
            prayerCount: 8
        },
        {
            id: 3,
            title: 'Career Opportunity',
            description: 'Prayer for wisdom and guidance in a new career opportunity.',
            requester: 'Michael Brown',
            date: '2024-03-22',
            category: 'career',
            status: 'answered',
            prayerCount: 15
        },
        {
            id: 4,
            title: 'Spiritual Growth',
            description: 'Request for spiritual growth and deeper relationship with God.',
            requester: 'Emily Davis',
            date: '2024-03-21',
            category: 'spiritual',
            status: 'active',
            prayerCount: 6
        }
    ];

    // Filter prayers based on search term and category
    const filteredPrayers = prayers.filter(prayer => {
        const matchesSearch = prayer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prayer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prayer.requester.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = filterCategory === 'all' || prayer.category === filterCategory;

        return matchesSearch && matchesCategory;
    });

    const handleAddPrayer = (formData) => {
        // Handle adding new prayer request
        console.log('New prayer data:', formData);
        setShowDrawer(false);
    };

    const handleEditPrayer = (prayer) => {
        // Handle editing prayer request
        console.log('Edit prayer:', prayer);
    };

    const handleDeletePrayer = (prayerId) => {
        // Handle deleting prayer request
        console.log('Delete prayer:', prayerId);
    };

    const getStatusBadge = (status) => {
        const statusColors = {
            active: 'primary',
            answered: 'success',
            pending: 'warning'
        };
        return (
            <Badge bg={statusColors[status]} className="status-badge">
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
        );
    };

    const getCategoryBadge = (category) => {
        const categoryColors = {
            health: 'info',
            family: 'warning',
            career: 'success',
            spiritual: 'danger'
        };
        return (
            <Badge bg={categoryColors[category]} className="category-badge">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
        );
    };

    const PrayerList = ({ data = [] }) => {
        return (
            <Row>
                {data && data.length > 0 ? (
                    data.map((prayer) => (
                        <Col key={prayer.id} md={6} lg={4} className="mb-4">
                            <Card className="prayer-card">
                                <Card.Body>
                                    <Stack gap={3}>
                                        <div className="prayer-header">
                                            <h5 className="prayer-title">{prayer.title}</h5>
                                            <div className="prayer-badges">
                                                {getStatusBadge(prayer.status)}
                                                {getCategoryBadge(prayer.category)}
                                            </div>
                                        </div>
                                        <p className="prayer-description">{prayer.description}</p>
                                        <div className="prayer-details">
                                            <div className="prayer-detail-item">
                                                <FaUser className="me-2" />
                                                {prayer.requester}
                                            </div>
                                            <div className="prayer-detail-item">
                                                <FaCalendar className="me-2" />
                                                {prayer.date}
                                            </div>
                                            <div className="prayer-detail-item">
                                                <FaPrayingHands className="me-2" />
                                                <span className="prayer-count">{prayer.prayerCount} prayers</span>
                                            </div>
                                        </div>
                                        <div className="prayer-actions">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => handleEditPrayer(prayer)}
                                            >
                                                <FaEdit className="me-1" />
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => handleDeletePrayer(prayer.id)}
                                            >
                                                <FaTrash className="me-1" />
                                                Delete
                                            </Button>
                                        </div>
                                    </Stack>
                                </Card.Body>
                            </Card>
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
            <Row className="mb-4">
                <Col>
                    <h2 className="page-title">Prayer Requests Management</h2>
                </Col>
                <Col xs="auto">
                    <Button
                        variant="primary"
                        onClick={() => setShowDrawer(true)}
                        className="add-prayer-btn"
                    >
                        <FaPlus className="me-2" />
                        Add New Prayer Request
                    </Button>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6}>
                    <Form.Group className="search-box">
                        <Form.Control
                            type="text"
                            placeholder="Search prayer requests..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="search-icon" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="filter-box">
                        <Form.Select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="health">Health</option>
                            <option value="family">Family</option>
                            <option value="career">Career</option>
                            <option value="spiritual">Spiritual</option>
                        </Form.Select>
                        <FaFilter className="filter-icon" />
                    </Form.Group>
                </Col>
            </Row>

            <PaginatedPrayerList data={filteredPrayers} itemsPerPage={6} />

            <Drawer
                show={showDrawer}
                onHide={() => setShowDrawer(false)}
                title="Add New Prayer Request"
                size="lg"
            >
                {/* Prayer request form will go here */}
            </Drawer>
        </Container>
    );
};

export default PrayerManagement; 