'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap';
import { FaPlus, FaSearch, FaFilter, FaCalendar, FaClock, FaMapMarkerAlt, FaUsers, FaEdit, FaTrash } from 'react-icons/fa';
import Drawer from '../../../../Components/Drawer';
import withPagination from '../../../../Components/Pagination';
import './events.css';
import EventForm from '../../../../Components/Forms/EventForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createEventApi, deleteEventApi, getAllEventsApi, updateEventApi } from '../../../../service/eventService';
import { useLayout } from '../../../../context/LayoutContext';
import DashboardHeader from '../../../../Components/Header/DashboardHeader/DashboardHeader';
import AdminEventFilter from '../../../../Components/Filters/AdminEventFilter/AdminEventFilter';

const EventsManagement = () => {
    const { showNotification } = useLayout();
    const [showDrawer, setShowDrawer] = useState(false);
    const [expandedEventId, setExpandedEventId] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [drawerTitle, setDrawerTitle] = useState("Add New Event");
    const [filter, setFilter] = useState({
        page: 1,
        limit: 1,
        search: "", // Avoid `null`, use an empty string
        status: null, // Empty array instead of null
        type: [], // Empty array instead of null
    });
    const [type, setType] = useState([]);

    const { data: eventsData, isLoading, error, refetch } = useQuery({
        queryKey: ['events', filter], // `filter` ensures re-fetching when values change
        queryFn: () => getAllEventsApi(filter), // Directly pass `filter`
        keepPreviousData: true,
    });

    const { mutate: createEvent, isPending: isCreating } = useMutation({
        mutationFn: createEventApi,
        onSuccess: () => {
            console.log('User created successfully');
            refetch();
            setShowDrawer(false);
            setSelectedEvent(null);
            setDrawerTitle("Add New Event");
            showNotification("Event created successfully", "success");
        },
        onError: (error) => {
            console.error('Error creating event:', error);
            showNotification("Error creating event", "error");
        },
    });

    const { mutate: updateEvent, isPending: isUpdating } = useMutation({
        mutationFn: updateEventApi,
        onSuccess: () => {
            console.log('User updated successfully');
            refetch();
            setShowDrawer(false);
            setSelectedEvent(null);
            setDrawerTitle("Add New Event");
            showNotification("Event updated successfully", "success");
        },
        onError: (error) => {
            console.error('Error updating event:', error);
            showNotification("Error updating event", "error");
        },
    });

    const { mutate: deleteEvent, isPending: isDeleting } = useMutation({
        mutationFn: deleteEventApi,
        onSuccess: () => {
            console.log('Eent deleted successfully');
            refetch();
            showNotification("Event deleted successfully", "success");
        },
        onError: (error) => {
            console.error('Error deleting event:', error);
            showNotification("Error deleting event", "error");
        },
    });

    const handleAddEvent = (formData) => {
        // Handle adding new event
        console.log('New event data:', formData);
        // setShowDrawer(false);

        if (!formData.isMultiDay) {
            formData.endDate = null;
            formData.endTime = null;
            formData.schedule = null;
        }

        if (selectedEvent) {
            updateEvent({ id: selectedEvent.event_id, data: formData });
        } else {
            createEvent(formData);
        }
    };



    const handleDeleteEvent = (eventId) => {
        // Handle deleting event
        console.log('Delete event:', eventId);
        deleteEvent(eventId);
        setExpandedEventId(null); // Close the expanded card if it's open
    };

    const handleDrawer = (event, type = "add") => {

        if (type == "add") {
            setDrawerTitle("Add New Event")
            setSelectedEvent(null);
        } else {
            console.log("event", event);
            setSelectedEvent(event);
            setDrawerTitle("Edit Event")

        }
        setShowDrawer(true)
    }

    const handleResetFilter = () => {
        setFilter({ ...filter, search: "", role_name: [], user_status: [] })
        setUserStatus([])
        setRole([])
    }

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
            <>
                {expandedEventId && (
                    <div
                        className="card-expansion-backdrop"
                        onClick={() => setExpandedEventId(null)}
                        onKeyDown={(e) => e.key === 'Escape' && setExpandedEventId(null)}
                        tabIndex={0}
                        aria-label="Close expanded event"
                    />
                )}
                <Row>
                    {data && data.length > 0 ? (
                        data.map((event) => (
                            <Col
                                key={event.id}
                                md={6}
                                lg={4}
                                className="mb-4"
                                style={
                                    expandedEventId === event.id
                                        ? { zIndex: 100, position: 'relative' }
                                        : {}
                                }
                            >
                                <Card
                                    className={`event-card ${expandedEventId === event.id ? 'expanded' : ''}`}
                                    onClick={(e) => {
                                        // Only expand if clicking on card body directly
                                        const isCardBodyClick = e.target === e.currentTarget ||
                                            e.target.classList.contains('event-description')

                                        if (isCardBodyClick &&
                                            !e.target.closest('.event-actions') &&
                                            !e.target.closest('.schedule-toggle') &&
                                            !e.target.closest('.schedule-content')) {
                                            setExpandedEventId(expandedEventId === event.id ? null : event.id);
                                        }
                                    }}
                                >
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
                                                    {event.isMultiDay
                                                        ? `${event.date} to ${event.endDate}`
                                                        : event.date}
                                                </div>
                                                <div className="event-detail-item">
                                                    <FaClock className="me-2" />
                                                    {event.isMultiDay
                                                        ? `${event.time} - ${event.endTime}`
                                                        : `${event.time} - ${event.endTime}`}
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
                                            {event.isMultiDay && event.schedule && (
                                                <div className="event-schedule">
                                                    <button
                                                        type="button"
                                                        className="schedule-toggle"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            const content = document.getElementById(`schedule-${event.id}`);
                                                            const isShowing = content.classList.toggle('show');

                                                            // Update button text
                                                            const toggleText = isShowing
                                                                ? 'Hide Schedule <span style="font-size:0.8em">▲</span>'
                                                                : 'View Schedule <span style="font-size:0.8em">▼</span>';
                                                            e.currentTarget.innerHTML = toggleText;

                                                            // Ensure proper aria attributes
                                                            e.currentTarget.setAttribute('aria-expanded', isShowing);
                                                            content.setAttribute('aria-hidden', !isShowing);
                                                        }}
                                                        style={{
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'var(--secondary-color)',
                                                            cursor: 'pointer',
                                                            padding: '0.25rem 0',
                                                            textAlign: 'left'
                                                        }}
                                                    >
                                                        View Schedule ▼
                                                    </button>
                                                    <div
                                                        id={`schedule-${event.id}`}
                                                        className="schedule-content"
                                                        aria-hidden="true"
                                                    >
                                                        {event.schedule.map((daySchedule, index) => (
                                                            <div key={index} className="day-schedule">
                                                                <strong>{daySchedule.day}</strong>
                                                                <ul className="activity-list">
                                                                    {daySchedule.activities.map((activity, i) => (
                                                                        <li key={i}>
                                                                            <span className="activity-time">{activity.time}</span>
                                                                            <span className="activity-desc">{activity.description}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="event-actions">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    onClick={() => handleDrawer(event, "edit")}
                                                >
                                                    <FaEdit className="me-1" />
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => handleDeleteEvent(event.event_id)}
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
            </>
        );
    };

    const PaginatedEventList = withPagination(EventList);

    console.log("eventsData", eventsData);
    console.log("isLoading", isLoading);
    console.log("event seleceted", selectedEvent);

    return (
        <Container fluid className="events-management py-4">
            <DashboardHeader
                title="Events Management"
                isButton={true}
                onClick={() => handleDrawer(null, "add")}
                icon={<FaPlus />}
                label="Add New Event"
            />
            <AdminEventFilter filter={filter} setFilter={setFilter} />

            <PaginatedEventList
                data={eventsData?.data?.events || []}
                itemsPerPage={filter.limit}
                setFilter={setFilter}
                filter={filter}
                totalPages={eventsData?.data?.totalPages || 1}
                isLoading={isLoading}
            />

            <Drawer
                show={showDrawer}
                onHide={() => { setShowDrawer(false), setSelectedEvent(null) }}
                title={drawerTitle}
                size="lg"
            >
                <EventForm
                    loding={isCreating || isUpdating}
                    onSubmit={handleAddEvent}
                    onCancel={() => { setShowDrawer(false), setSelectedEvent(null) }}
                    initialData={selectedEvent}
                />
            </Drawer>
        </Container>
    );
};

export default EventsManagement;
