'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap';
import { FaPlus, FaSearch, FaFilter, FaCalendar, FaClock, FaMapMarkerAlt, FaUsers, FaEdit, FaTrash } from 'react-icons/fa';
import Drawer from '../../../../Components/Drawer';
import withPagination from '../../../../Components/Pagination';
import './events.css';

const EventsManagement = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    // Sample events data
    const events = [
        {
            id: 1,
            title: 'Sunday Service',
            description: 'Weekly Sunday worship service with praise and worship, sermon, and fellowship.',
            date: '2024-03-24',
            time: '10:00 AM',
            location: 'Main Sanctuary',
            attendees: 150,
            type: 'service',
            status: 'upcoming'
        },
        {
            id: 2,
            title: 'Youth Bible Study',
            description: 'Weekly Bible study session for youth members focusing on contemporary issues.',
            date: '2024-03-25',
            time: '6:00 PM',
            location: 'Youth Center',
            attendees: 45,
            type: 'study',
            status: 'upcoming'
        },
        {
            id: 3,
            title: 'Prayer Meeting',
            description: 'Monthly prayer meeting for church members to come together in prayer.',
            date: '2024-03-26',
            time: '7:00 PM',
            location: 'Prayer Room',
            attendees: 30,
            type: 'prayer',
            status: 'ongoing'
        },
        {
            id: 4,
            title: 'Choir Practice',
            description: 'Weekly choir practice session for Sunday service preparation.',
            date: '2024-03-27',
            time: '5:00 PM',
            location: 'Music Room',
            attendees: 25,
            type: 'practice',
            status: 'completed'
        }
    ];

    // Filter events based on search term and type
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filterType === 'all' || event.type === filterType;

        return matchesSearch && matchesType;
    });

    const handleAddEvent = (formData) => {
        // Handle adding new event
        console.log('New event data:', formData);
        setShowDrawer(false);
    };

    const handleEditEvent = (event) => {
        // Handle editing event
        console.log('Edit event:', event);
    };

    const handleDeleteEvent = (eventId) => {
        // Handle deleting event
        console.log('Delete event:', eventId);
    };

    const getStatusBadge = (status) => {
        const statusColors = {
            upcoming: 'primary',
            ongoing: 'success',
            completed: 'secondary'
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
            study: 'warning',
            prayer: 'danger',
            practice: 'success'
        };
        return (
            <Badge bg={typeColors[type]} className="type-badge">
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
        );
    };

    const EventList = ({ data = [] }) => {
        return (
            <Row>
                {data && data.length > 0 ? (
                    data.map((event) => (
                        <Col key={event.id} md={6} lg={4} className="mb-4">
                            <Card className="event-card">
                                <Card.Body>
                                    <Stack gap={3}>
                                        <div className="event-header">
                                            <h5 className="event-title">{event.title}</h5>
                                            <div className="event-badges">
                                                {getStatusBadge(event.status)}
                                                {getTypeBadge(event.type)}
                                            </div>
                                        </div>
                                        <p className="event-description">{event.description}</p>
                                        <div className="event-details">
                                            <div className="event-detail-item">
                                                <FaCalendar className="me-2" />
                                                {event.date}
                                            </div>
                                            <div className="event-detail-item">
                                                <FaClock className="me-2" />
                                                {event.time}
                                            </div>
                                            <div className="event-detail-item">
                                                <FaMapMarkerAlt className="me-2" />
                                                {event.location}
                                            </div>
                                            <div className="event-detail-item">
                                                <FaUsers className="me-2" />
                                                {event.attendees} attendees
                                            </div>
                                        </div>
                                        <div className="event-actions">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => handleEditEvent(event)}
                                            >
                                                <FaEdit className="me-1" />
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => handleDeleteEvent(event.id)}
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
                                <h4 className="text-muted">No events found</h4>
                                <p className="text-muted">Try adjusting your search or filter criteria</p>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        );
    };

    const PaginatedEventList = withPagination(EventList);

    return (
        <Container fluid className="events-management">
            <Row className="mb-4">
                <Col>
                    <h2 className="page-title">Events Management</h2>
                </Col>
                <Col xs="auto">
                    <Button
                        variant="primary"
                        onClick={() => setShowDrawer(true)}
                        className="add-event-btn"
                    >
                        <FaPlus className="me-2" />
                        Add New Event
                    </Button>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6}>
                    <Form.Group className="search-box">
                        <Form.Control
                            type="text"
                            placeholder="Search events..."
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
                            <option value="all">All Events</option>
                            <option value="service">Services</option>
                            <option value="study">Bible Studies</option>
                            <option value="prayer">Prayer Meetings</option>
                            <option value="practice">Practices</option>
                        </Form.Select>
                        <FaFilter className="filter-icon" />
                    </Form.Group>
                </Col>
            </Row>

            <PaginatedEventList data={filteredEvents} itemsPerPage={6} />

            <Drawer
                show={showDrawer}
                onHide={() => setShowDrawer(false)}
                title="Add New Event"
                size="lg"
            >
                {/* Event form will go here */}
            </Drawer>
        </Container>
    );
};

export default EventsManagement; 