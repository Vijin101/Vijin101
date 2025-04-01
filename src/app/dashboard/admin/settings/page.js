'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import {
    FaCog,
    FaBell,
    FaPalette,
    FaEnvelope,
    FaLock,
    FaSave,
    FaUndo,
    FaGlobe,
    FaUsers,
    FaDatabase
} from 'react-icons/fa';
import './settings.css';

const SettingsManagement = () => {
    const [settings, setSettings] = useState({
        siteName: 'My Church',
        siteDescription: 'A place of worship and community',
        primaryColor: '#1a2e50',
        secondaryColor: '#e3b505',
        emailNotifications: true,
        pushNotifications: false,
        language: 'en',
        timezone: 'UTC',
        membershipAccess: 'restricted',
        dataRetention: '30',
        maintenanceMode: false,
        debugMode: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle settings update
        console.log('Updated settings:', settings);
    };

    const handleReset = () => {
        // Reset to default settings
        setSettings({
            siteName: 'My Church',
            siteDescription: 'A place of worship and community',
            primaryColor: '#1a2e50',
            secondaryColor: '#e3b505',
            emailNotifications: true,
            pushNotifications: false,
            language: 'en',
            timezone: 'UTC',
            membershipAccess: 'restricted',
            dataRetention: '30',
            maintenanceMode: false,
            debugMode: false
        });
    };

    return (
        <div className="settings-management">
            <div className="header-section">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col>
                            <h2 className="page-title">Settings</h2>
                            <p className="header-description">
                                Configure your church application settings and preferences.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Card className="settings-card">
                                <h3 className="settings-card-title">
                                    <FaGlobe />
                                    General Settings
                                </h3>
                                <div className="settings-form-group">
                                    <Form.Label className="settings-label">Site Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="siteName"
                                        value={settings.siteName}
                                        onChange={handleChange}
                                        className="settings-input"
                                    />
                                </div>
                                <div className="settings-form-group">
                                    <Form.Label className="settings-label">Site Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="siteDescription"
                                        value={settings.siteDescription}
                                        onChange={handleChange}
                                        className="settings-input"
                                        rows={3}
                                    />
                                </div>
                            </Card>

                            <Card className="settings-card">
                                <h3 className="settings-card-title">
                                    <FaPalette />
                                    Appearance
                                </h3>
                                <div className="settings-form-group">
                                    <Form.Label className="settings-label">Primary Color</Form.Label>
                                    <Form.Control
                                        type="color"
                                        name="primaryColor"
                                        value={settings.primaryColor}
                                        onChange={handleChange}
                                        className="settings-input"
                                    />
                                </div>
                                <div className="settings-form-group">
                                    <Form.Label className="settings-label">Secondary Color</Form.Label>
                                    <Form.Control
                                        type="color"
                                        name="secondaryColor"
                                        value={settings.secondaryColor}
                                        onChange={handleChange}
                                        className="settings-input"
                                    />
                                </div>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card className="settings-card">
                                <h3 className="settings-card-title">
                                    <FaBell />
                                    Notifications
                                </h3>
                                <div className="settings-form-group">
                                    <Form.Check
                                        type="switch"
                                        id="email-notifications"
                                        label="Email Notifications"
                                        name="emailNotifications"
                                        checked={settings.emailNotifications}
                                        onChange={handleChange}
                                        className="settings-switch"
                                    />
                                    <p className="settings-description">Receive updates via email</p>
                                </div>
                                <div className="settings-form-group">
                                    <Form.Check
                                        type="switch"
                                        id="push-notifications"
                                        label="Push Notifications"
                                        name="pushNotifications"
                                        checked={settings.pushNotifications}
                                        onChange={handleChange}
                                        className="settings-switch"
                                    />
                                    <p className="settings-description">Receive browser push notifications</p>
                                </div>
                            </Card>

                            <Card className="settings-card">
                                <h3 className="settings-card-title">
                                    <FaUsers />
                                    Access Control
                                </h3>
                                <div className="settings-form-group">
                                    <Form.Label className="settings-label">Membership Access</Form.Label>
                                    <Form.Select
                                        name="membershipAccess"
                                        value={settings.membershipAccess}
                                        onChange={handleChange}
                                        className="settings-select"
                                    >
                                        <option value="open">Open Registration</option>
                                        <option value="restricted">Restricted</option>
                                        <option value="invitation">Invitation Only</option>
                                    </Form.Select>
                                </div>
                            </Card>

                            <Card className="settings-card">
                                <h3 className="settings-card-title">
                                    <FaDatabase />
                                    System
                                </h3>
                                <div className="settings-form-group">
                                    <Form.Check
                                        type="switch"
                                        id="maintenance-mode"
                                        label="Maintenance Mode"
                                        name="maintenanceMode"
                                        checked={settings.maintenanceMode}
                                        onChange={handleChange}
                                        className="settings-switch"
                                    />
                                    <p className="settings-description">Enable maintenance mode</p>
                                </div>
                                <div className="settings-form-group">
                                    <Form.Check
                                        type="switch"
                                        id="debug-mode"
                                        label="Debug Mode"
                                        name="debugMode"
                                        checked={settings.debugMode}
                                        onChange={handleChange}
                                        className="settings-switch"
                                    />
                                    <p className="settings-description">Enable debug mode for development</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <div className="settings-actions">
                        <Button
                            variant="secondary"
                            onClick={handleReset}
                            className="settings-btn settings-btn-secondary"
                        >
                            <FaUndo />
                            Reset to Default
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            className="settings-btn settings-btn-primary"
                        >
                            <FaSave />
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default SettingsManagement; 