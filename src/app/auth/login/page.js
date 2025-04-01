'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaChurch, FaPrayingHands, FaUsers, FaHeart } from 'react-icons/fa';
import LoginForm from '../../../Components/Forms/LoginForm';
import './styles.css';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../../service/authService';
import { useAuthStore } from '../../../store';
import { shallow } from "zustand/shallow";

export default function Login() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const { user, isAuthenticated, isLoading, login } = useAuthStore();

    useEffect(() => {
        if (!isLoading && user) {
            if (isAuthenticated && user.role_name === 'Admin' || user.role_name === 'Super Admin') {
                router.push('/dashboard/admin');
            }
            else if (isAuthenticated && user.role_name === 'User') {
                router.push('/dashboard/user');
            }
        }
    }, [isAuthenticated, user, isLoading]);

    const { mutate: emailLogin, isPending } = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            console.log(data);
            login(data.data.user);
            if (data.data.user.role_name === 'Admin' || data.data.user.role_name === 'Super Admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/user');
            }
        },
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setIsSubmitting(true);
            emailLogin(values);
        } catch (error) {
            setStatus({ error: 'Login failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    const features = [
        {
            icon: <FaChurch className="login-feature-icon" />,
            title: "Welcome to Our Church",
            description: "Join our community of believers and grow in your faith journey."
        },
        {
            icon: <FaPrayingHands className="login-feature-icon" />,
            title: "Spiritual Growth",
            description: "Access resources, events, and connect with fellow members."
        },
        {
            icon: <FaUsers className="login-feature-icon" />,
            title: "Community",
            description: "Be part of our vibrant church community and make lasting connections."
        },
        {
            icon: <FaHeart className="login-feature-icon" />,
            title: "Serve & Give",
            description: "Contribute to our mission and make a difference in people's lives."
        }
    ];



    return (
        <div className="login-container">
            {/* Left Side - Content */}
            <div className="login-content-side">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4">Welcome Back</h1>
                    <p className="lead">Sign in to access your church account</p>
                </div>
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                            <div className="login-feature-item">
                                {feature.icon}
                                <div>
                                    <h5 className="login-feature-title">{feature.title}</h5>
                                    <p className="login-feature-description">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="login-form-side">
                <LoginForm
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    status={status}
                />
            </div>
        </div>
    );
} 