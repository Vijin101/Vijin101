'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserPlus, FaShieldAlt, FaHandshake, FaPray } from 'react-icons/fa';
import SignupForm from '../../../Components/Forms/SignupForm';
import './styles.css';
import { useMutation } from '@tanstack/react-query';
import { signUpApi } from '../../../service/authService';
export default function Signup() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const { mutate: signupUser } = useMutation({
        mutationFn: signUpApi,
        onSuccess: (data) => {
            router.push('/auth/success');
        },
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            delete values.confirmPassword;
            setIsSubmitting(true);
            signupUser(values);
        } catch (error) {
            setStatus({ error: 'Registration failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    const features = [
        {
            icon: <FaUserPlus className="signup-feature-icon" />,
            title: "Join Our Community",
            description: "Create your account and become part of our church family."
        },
        {
            icon: <FaShieldAlt className="signup-feature-icon" />,
            title: "Secure Registration",
            description: "Your information is protected with industry-standard security."
        },
        {
            icon: <FaHandshake className="signup-feature-icon" />,
            title: "Connect & Grow",
            description: "Build meaningful relationships and grow in your faith journey."
        },
        {
            icon: <FaPray className="signup-feature-icon" />,
            title: "Spiritual Support",
            description: "Access prayer requests, resources, and community support."
        }
    ];

    return (
        <div className="signup-container">
            {/* Left Side - Content */}
            <div className="signup-content-side">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4">Welcome to Our Church</h1>
                    <p className="lead">Create your account and join our community</p>
                </div>
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                            <div className="signup-feature-item">
                                {feature.icon}
                                <div>
                                    <h5 className="signup-feature-title">{feature.title}</h5>
                                    <p className="signup-feature-description">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="signup-form-side">
                <SignupForm
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    status={status}
                />
            </div>
        </div>
    );
} 