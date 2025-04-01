'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Button, Alert } from 'react-bootstrap';
import './AuthForms.css';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .required('Phone number is required')
        .min(10, 'Phone number must be at least 10 characters'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export default function SignupForm({ onSubmit, isSubmitting, status }) {
    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">Create your account</h2>
            <p className="auth-form-subtitle">
                Or{' '}
                <Link href="/auth/login">
                    sign in to your account
                </Link>
            </p>

            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        {status?.error && (
                            <Alert variant="danger">
                                {status.error}
                            </Alert>
                        )}

                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                                id="fullName"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your full name"
                            />
                            {touched.name && errors.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your email"
                            />
                            {touched.email && errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className={`form-control ${touched.phoneNumber && errors.phoneNumber ? 'is-invalid' : ''}`}
                                id="phoneNumber"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your phone number"
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                                <div className="invalid-feedback">{errors.phoneNumber}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Create a password"
                            />
                            {touched.password && errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Confirm your password"
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <div className="invalid-feedback">{errors.confirmPassword}</div>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="auth-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating account...' : 'Create account'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
} 