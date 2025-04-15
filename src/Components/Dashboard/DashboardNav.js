'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaRegCalendarAlt, FaPrayingHands, FaBell, FaBars, FaTimes, FaBlogger } from 'react-icons/fa';
import { logoutApi } from '../../service/authService';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store';

export default function DashboardNav({ userRole, isSidebarOpen, setIsSidebarOpen }) {
    const pathname = usePathname();
    const { logout } = useAuthStore();

    const { mutate: logoutUser } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            logout();
        },
    });

    const adminLinks = [
        { href: '/dashboard/admin', label: 'Overview', icon: <FaHome />, exact: true },
        { href: '/dashboard/admin/members', label: 'Members', icon: <FaUser /> },
        { href: '/dashboard/admin/events', label: 'Events', icon: <FaRegCalendarAlt /> },
        { href: '/dashboard/admin/prayer', label: 'Prayer Requests', icon: <FaPrayingHands /> },
        {
            href: '/dashboard/admin/blogs',
            label: 'Blogs',
            icon: <FaBlogger />,
            matchSubpaths: true // Will match all subpaths under /dashboard/admin/blogs
        },
        // { href: '/dashboard/admin/notifications', label: 'Notifications', icon: <FaBell /> },
        // { href: '/dashboard/admin/settings', label: 'Settings', icon: <FaCog /> },
    ];

    const userLinks = [
        { href: '/dashboard/user', label: 'Profile', icon: <FaUser />, exact: true },
        { href: '/dashboard/user/events', label: 'Events', icon: <FaRegCalendarAlt /> },
        { href: '/dashboard/user/prayer', label: 'Prayer Requests', icon: <FaPrayingHands /> },
        { href: '/dashboard/user/notifications', label: 'Notifications', icon: <FaBell /> },
    ];

    const links = userRole === 'Admin' || userRole === 'Super Admin' ? adminLinks : userLinks;

    const isLinkActive = (link) => {
        // For links that need exact match (like dashboard home)
        if (link.exact) {
            return pathname === link.href;
        }

        // For links that should match all subpaths (like blogs)
        if (link.matchSubpaths) {
            return pathname.startsWith(link.href);
        }

        // Default behavior for regular links
        return pathname.startsWith(link.href) &&
            (pathname === link.href || pathname === `${link.href}/`);
    };

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <nav className={`dashboard-sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar-header">
                <Link href="/" className="sidebar-logo">
                    Church App
                </Link>
                <button
                    className="sidebar-toggle"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div className="sidebar-menu">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`sidebar-link ${isLinkActive(link) ? 'active' : ''}`}
                    >
                        <span className="sidebar-icon">{link.icon}</span>
                        {isSidebarOpen && <span className="sidebar-label">{link.label}</span>}
                    </Link>
                ))}
            </div>

            <div className="sidebar-footer">
                <button
                    className="sidebar-logout"
                    onClick={handleLogout}
                >
                    <span className="sidebar-icon"><FaSignOutAlt /></span>
                    {isSidebarOpen && <span className="sidebar-label">Logout</span>}
                </button>
            </div>
        </nav>
    );
}