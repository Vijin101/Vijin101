'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaRegCalendarAlt, FaPrayingHands, FaBell, FaChartLine, FaUserPlus, FaCog, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import TextInput from '../../../Components/InputFields/TextInput';
import EmailInput from '../../../Components/InputFields/EmailInput';
import AutocompleteInput from '../../../Components/InputFields/AutocompleteInput';
import CheckboxInput from '../../../Components/InputFields/CheckboxInput';
import ColorPicker from '../../../Components/InputFields/ColorPicker';
import DateInput from '../../../Components/InputFields/DateInput';
import FileInput from '../../../Components/InputFields/FileInput';
import MultiSelectDropdown from '../../../Components/InputFields/MultiSelectDropdown';
import NumberInput from '../../../Components/InputFields/NumberInput';
import PasswordInput from '../../../Components/InputFields/PasswordInput';
import RadioInput from '../../../Components/InputFields/RadioInput';
import RangeSlider from '../../../Components/InputFields/RangeSlider';
import SelectInput from '../../../Components/InputFields/SelectInput';
import TextareaInput from '../../../Components/InputFields/TextareaInput';
import TimeInput from '../../../Components/InputFields/TimeInput';
import ToggleSwitch from '../../../Components/InputFields/ToggleSwitch';
import CustomAutocompleteInput from '../../../Components/InputFields/CustomAutocompleteInput';


export default function AdminDashboard() {


    const stats = [
        {
            title: 'Total Members',
            value: '1,234',
            change: '+12%',
            icon: <FaUsers />,
            color: 'var(--primary-color)',
            trend: 'up'
        },
        {
            title: 'Active Events',
            value: '8',
            change: '+2',
            icon: <FaRegCalendarAlt />,
            color: 'var(--secondary-color)',
            trend: 'up'
        },
        {
            title: 'Prayer Requests',
            value: '45',
            change: '+5',
            icon: <FaPrayingHands />,
            color: 'var(--accent-color)',
            trend: 'up'
        },
        {
            title: 'New Notifications',
            value: '12',
            change: '+3',
            icon: <FaBell />,
            color: 'var(--info-color)',
            trend: 'up'
        }
    ];

    const quickActions = [
        {
            title: 'Add Member',
            description: 'Register a new church member',
            icon: <FaUserPlus />,
            color: 'var(--primary-color)',
            href: '/dashboard/admin/members'
        },
        {
            title: 'Create Event',
            description: 'Schedule a new church event',
            icon: <FaRegCalendarAlt />,
            color: 'var(--secondary-color)',
            href: '/dashboard/admin/events'
        },
        {
            title: 'View Reports',
            description: 'Access church statistics and reports',
            icon: <FaChartLine />,
            color: 'var(--accent-color)',
            href: '/dashboard/admin/reports'
        },
        {
            title: 'Manage Settings',
            description: 'Configure system settings',
            icon: <FaCog />,
            color: 'var(--info-color)',
            href: '/dashboard/admin/settings'
        }
    ];

    const recentActivities = [
        {
            title: 'New Member Registration',
            description: 'John Doe joined the church',
            time: '2 hours ago',
            icon: <FaUserPlus />,
            type: 'member'
        },
        {
            title: 'Event Created',
            description: 'Sunday Service scheduled',
            time: '4 hours ago',
            icon: <FaRegCalendarAlt />,
            type: 'event'
        },
        {
            title: 'Prayer Request',
            description: 'New prayer request from Sarah',
            time: '5 hours ago',
            icon: <FaPrayingHands />,
            type: 'prayer'
        },
        {
            title: 'Document Uploaded',
            description: 'New sermon notes added',
            time: '6 hours ago',
            icon: <FaFileAlt />,
            type: 'document'
        }
    ];



    return (
        // <Container fluid className="admin-dashboard py-4">
        //     {/* Stats Section */}
        //     <Row className="mb-4">
        //         {stats.map((stat, index) => (
        //             <Col key={index} xs={12} sm={6} md={3} className="mb-4">
        //                 <Card className="h-100 border-0 shadow-sm stat-card">
        //                     <Card.Body>
        //                         <div className="d-flex align-items-center">
        //                             <div className="stat-icon me-3" style={{ color: stat.color }}>
        //                                 {stat.icon}
        //                             </div>
        //                             <div>
        //                                 <h6 className="stat-title mb-0">{stat.title}</h6>
        //                                 <h3 className="stat-value mb-0">{stat.value}</h3>
        //                             </div>
        //                         </div>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>

        //     {/* Quick Actions Section */}
        //     <div className="quick-actions-section mb-4">
        //         <h5 className="section-title mb-4">Quick Actions</h5>
        //         <Row>
        //             {quickActions.map((action, index) => (
        //                 <Col key={index} xs={12} sm={6} md={3}>
        //                     <div className="quick-action-item">
        //                         <div className="action-icon" style={{ color: action.color }}>
        //                             {action.icon}
        //                         </div>
        //                         <div className="action-content">
        //                             <h6 className="action-title">{action.title}</h6>
        //                             <p className="action-description">{action.description}</p>
        //                         </div>
        //                         <a href={action.href} className="action-link" style={{ borderColor: action.color, color: action.color }}>
        //                             Take Action <FaArrowRight className="ms-2" />
        //                         </a>
        //                     </div>
        //                 </Col>
        //             ))}
        //         </Row>
        //     </div>

        //     {/* Recent Activities */}
        //     <Row>
        //         <Col xs={12}>
        //             <Card className="border-0 shadow-sm">
        //                 <Card.Header className="bg-transparent">
        //                     <h5 className="card-title mb-0">Recent Activities</h5>
        //                 </Card.Header>
        //                 <Card.Body className="p-0">
        //                     <div className="activity-list">
        //                         {recentActivities.map((activity, index) => (
        //                             <div key={index} className="activity-item p-3 border-bottom">
        //                                 <div className="d-flex align-items-center">
        //                                     <div className="activity-icon me-3">
        //                                         {activity.icon}
        //                                     </div>
        //                                     <div>
        //                                         <h6 className="activity-title mb-1">{activity.title}</h6>
        //                                         <p className="activity-description mb-0">
        //                                             {activity.description}
        //                                         </p>
        //                                         <small className="activity-time">
        //                                             {activity.time}
        //                                         </small>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>

        <div>
            <h1>Admin Dashboard</h1>

            {/* check all inputs */}

            <TextInput label="Name" placeholder="Enter your name" value="" size="small" className="mb-4" iconLeft={<FaUserPlus />} />
            <TextInput label="Name" placeholder="Enter your name" value="" size="small" className="mb-4" />
            <EmailInput label="Email" placeholder="Enter your email" value="john.doe@example.com" size="medium" className="mb-4" />
            <AutocompleteInput label="Role" placeholder="Select your role" value="Admin" size="medium" className="mb-4" options={[{ label: "Admin", value: "Admin" }, { label: "User", value: "User" }]} onChange={(e) => console.log(e)} />
            <CheckboxInput label="Active" checked={true} onChange={(e) => console.log(e)} size="medium" className="mb-4" />
            <ColorPicker label="Color" value="#000000" size="medium" className="mb-4" />
            <DateInput label="Date" value="2021-01-01" size="medium" className="mb-4" />
            <FileInput label="File" onChange={(e) => console.log(e)} size="medium" className="mb-4" />
            <MultiSelectDropdown label="Multi Select" placeholder="Select your options" value={["Option 1", "Option 2"]} size="medium" className="mb-4" options={[{ label: "Option 1", value: "Option 1" }, { label: "Option 2", value: "Option 2" }, { label: "Option 3", value: "Option 3" }, { label: "Option 4", value: "Option 4" }, { label: "Option 5", value: "Option 5" }]} onChange={(e) => console.log(e)} />
            <NumberInput label="Number" placeholder="Enter your number" value="123" size="medium" className="mb-4" />
            <PasswordInput label="Password" placeholder="Enter your password" value="password" size="medium" className="mb-4" />
            <RadioInput label="Radio" value="Option 1" size="medium" className="mb-4" options={[{ label: "Option 1", value: "Option 1" }, { label: "Option 2", value: "Option 2" }]} onChange={(e) => console.log(e)} />
            <RangeSlider label="Range" value={10} min={0} max={100} size="medium" className="mb-4" />
            <SelectInput label="Select" value="Option 1" size="medium" className="mb-4" options={[{ label: "Option 1", value: "Option 1" }, { label: "Option 2", value: "Option 2" }]} onChange={(e) => console.log(e)} />
            <TextareaInput label="Textarea" placeholder="Enter your text" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." size="medium" className="mb-4" />
            <TimeInput label="Time" value="12:00" size="medium" className="mb-4" />
            <ToggleSwitch label="Toggle" checked={true} onChange={(e) => console.log(e)} size="medium" className="mb-4" />
            <CustomAutocompleteInput label="Custom Autocomplete" placeholder="Select your options" value="Option 1" size="medium" className="mb-4" options={[{ label: "Option 1", value: "Option 1" }, { label: "Option 2", value: "Option 2" }]} onChange={(e) => console.log(e)} />
        </div>
    );
} 