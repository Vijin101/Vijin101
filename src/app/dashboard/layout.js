'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Loading from '../../Components/Loading/Loading';
import DashboardNav from '../../Components/Dashboard/DashboardNav';
import './dashboard.css';
import { useAuthStore } from '../../store';
import { useRoleStore } from '../../store/roleStore';

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { isAuthenticated, user, isLoading: authLoading } = useAuthStore();
    const { initializeRoleList } = useRoleStore();
    useEffect(() => {
        // Check authentication status
        const checkAuth = async () => {
            try {
                // Replace this with your actual authentication check
                if (!isAuthenticated) {
                    router.push('/auth/login');
                    return;
                }
                // Check if user is trying to access admin routes without admin privileges
                if (pathname.startsWith('/dashboard/admin') && user.role_name !== 'Admin' && user.role_name !== 'Super Admin') {

                    router.push('/dashboard/user');
                    return;
                }

                // Check if user is trying to access user routes with admin privileges
                if (pathname.startsWith('/dashboard/user') && (user.role_name === 'Admin' || user.role_name === 'Super Admin')) {
                    router.push('/dashboard/admin');
                    return;
                }
            } catch (error) {
                console.error('Authentication error:', error);
                router.push('/auth/login');
            } finally {
                setIsLoading(false);
            }
        };

        if (!authLoading) {
            if (user.role_name === 'Admin' || user.role_name === 'Super Admin') {
                initializeRoleList();
            }
            checkAuth();

        }

    }, [router, pathname, isAuthenticated, user, authLoading]);

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
                        <h1 className="dashboard-title">
                            {pathname.includes('/admin') ? 'Admin Dashboard' : 'User Dashboard'}
                        </h1>
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