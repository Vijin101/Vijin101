'use client';

import { FaUser, FaRegCalendarAlt, FaPrayingHands, FaBell, FaChurch, FaHandshake, FaBook, FaHeart } from 'react-icons/fa';

export default function UserDashboard() {
    const userStats = [
        {
            title: 'My Profile',
            value: 'Complete',
            icon: <FaUser />,
            color: 'var(--primary-color)'
        },
        {
            title: 'Upcoming Events',
            value: '3',
            icon: <FaRegCalendarAlt />,
            color: 'var(--secondary-color)'
        },
        {
            title: 'Prayer Requests',
            value: '2 Active',
            icon: <FaPrayingHands />,
            color: 'var(--accent-color)'
        },
        {
            title: 'Notifications',
            value: '5 New',
            icon: <FaBell />,
            color: 'var(--info-color)'
        }
    ];

    const quickActions = [
        {
            title: 'My Profile',
            description: 'Update your personal information and preferences',
            icon: <FaUser />,
            color: 'var(--primary-color)'
        },
        {
            title: 'Church Events',
            description: 'View and register for upcoming church events',
            icon: <FaChurch />,
            color: 'var(--secondary-color)'
        },
        {
            title: 'Prayer Requests',
            description: 'Submit and track your prayer requests',
            icon: <FaPrayingHands />,
            color: 'var(--accent-color)'
        },
        {
            title: 'Volunteer',
            description: 'Sign up for volunteer opportunities',
            icon: <FaHandshake />,
            color: 'var(--success-color)'
        }
    ];

    const upcomingEvents = [
        {
            title: 'Sunday Service',
            date: 'Tomorrow, 10:00 AM',
            location: 'Main Sanctuary',
            icon: <FaChurch />
        },
        {
            title: 'Bible Study',
            date: 'Wednesday, 7:00 PM',
            location: 'Room 101',
            icon: <FaBook />
        },
        {
            title: 'Prayer Meeting',
            date: 'Friday, 6:00 PM',
            location: 'Prayer Room',
            icon: <FaPrayingHands />
        }
    ];

    const recentPrayerRequests = [
        {
            title: 'Family Health',
            status: 'Active',
            date: '2 days ago',
            icon: <FaHeart />
        },
        {
            title: 'Career Guidance',
            status: 'Active',
            date: '5 days ago',
            icon: <FaHeart />
        }
    ];

    return (
        <div className="user-dashboard">
            {/* Welcome Section */}
            <div className="dashboard-welcome">
                <h2 className="welcome-title">Welcome back!</h2>
                <p className="welcome-subtitle">Here's what's happening in your church community</p>
            </div>

            {/* Stats Section */}
            <div className="dashboard-stats">
                {userStats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-card-icon" style={{ color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-card-content">
                            <div className="stat-card-title">{stat.title}</div>
                            <div className="stat-card-value">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="dashboard-grid">
                {quickActions.map((action, index) => (
                    <div key={index} className="dashboard-card">
                        <div className="dashboard-card-icon" style={{ color: action.color }}>
                            {action.icon}
                        </div>
                        <h3 className="dashboard-card-title">{action.title}</h3>
                        <p className="dashboard-card-description">{action.description}</p>
                        <button className="dashboard-card-button">
                            Access
                        </button>
                    </div>
                ))}
            </div>

            {/* Upcoming Events and Prayer Requests Grid */}
            <div className="dashboard-grid">
                {/* Upcoming Events */}
                <div className="dashboard-card">
                    <h3 className="dashboard-card-title">Upcoming Events</h3>
                    <div className="event-list">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <div className="event-icon" style={{ color: 'var(--secondary-color)' }}>
                                    {event.icon}
                                </div>
                                <div className="event-content">
                                    <h4 className="event-title">{event.title}</h4>
                                    <p className="event-details">{event.date}</p>
                                    <p className="event-location">{event.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Prayer Requests */}
                <div className="dashboard-card">
                    <h3 className="dashboard-card-title">Recent Prayer Requests</h3>
                    <div className="prayer-list">
                        {recentPrayerRequests.map((prayer, index) => (
                            <div key={index} className="prayer-item">
                                <div className="prayer-icon" style={{ color: 'var(--accent-color)' }}>
                                    {prayer.icon}
                                </div>
                                <div className="prayer-content">
                                    <h4 className="prayer-title">{prayer.title}</h4>
                                    <div className="prayer-meta">
                                        <span className="prayer-status">{prayer.status}</span>
                                        <span className="prayer-date">{prayer.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 