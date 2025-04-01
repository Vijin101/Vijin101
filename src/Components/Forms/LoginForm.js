'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Button, Alert } from 'react-bootstrap';
import './AuthForms.css';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export default function LoginForm({ onSubmit, isSubmitting, status }) {
    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">Sign in to your account</h2>
            <p className="auth-form-subtitle">
                Or{' '}
                <Link href="/auth/signup">
                    create a new account
                </Link>
            </p>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
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
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your password"
                            />
                            {touched.password && errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="auth-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
} 