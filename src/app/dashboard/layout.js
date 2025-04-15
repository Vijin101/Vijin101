'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import Loading from '../../Components/Loading/Loading';
import DashboardNav from '../../Components/Dashboard/DashboardNav';
import './dashboard.css';
import { useAuthStore } from '../../store';
import { useRoleStore } from '../../store/roleStore';

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        typeof window !== 'undefined' && window.innerWidth > 768
    );
    const { isAuthenticated, user, isLoading: authLoading } = useAuthStore();
    const { initializeRoleList } = useRoleStore();

    useEffect(() => {

        console.log(isAuthenticated);
        if (!authLoading) {
            if (!isAuthenticated) {
                router.push('/auth/login');
                return;
            }

            if (user?.role_name === 'Admin' || user?.role_name === 'Super Admin') {
                initializeRoleList();
            }

            const adminRoutes = pathname.startsWith('/dashboard/admin');
            const userRoutes = pathname.startsWith('/dashboard/user');

            if (adminRoutes && user.role_name !== 'Admin' && user.role_name !== 'Super Admin') {
                router.push('/dashboard/user');
            } else if (userRoutes && (user.role_name === 'Admin' || user.role_name === 'Super Admin')) {
                router.push('/dashboard/admin');
            }
        }
    }, [isAuthenticated, user?.role_name, authLoading]);


    if (authLoading) {
        return <Loading />;
    }

    return (
        <div className="dashboard-container">
            <DashboardNav
                userRole={user?.role_name}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <main className={`dashboard-main ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="dashboard-header">
                    <div className="dashboard-header-content">
                        <div className="d-flex align-items-center">
                            <button
                                className="mobile-sidebar-toggle"
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                <FaBars />
                            </button>
                            <h1 className="dashboard-title">
                                {pathname.includes('/admin') ? 'Admin Dashboard' : 'User Dashboard'}
                            </h1>
                        </div>
                        <div className="dashboard-user-info">
                            <div className="user-avatar" onClick={() => router.push('/dashboard/admin/profile')}>
                                {user?.fullName ? user.fullName.charAt(0) : '?'}
                            </div>
                            <div className="user-info-text">
                                <span className="user-name">{user?.fullName}</span>
                                <span className="user-role-small">{user?.role_name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
