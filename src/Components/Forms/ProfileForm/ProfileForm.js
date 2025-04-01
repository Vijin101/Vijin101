'use client';

import { useEffect } from 'react';
import { useAuthStore } from '../../../store';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import './ProfileForm.css';
import { useMutation } from '@tanstack/react-query';
import { updateUserProfileApi } from '../../../service/userService';

const ProfileForm = () => {
    const { user } = useAuthStore(); // Assuming updateUser is a function to update user data

    const { mutate: updateUserProfile } = useMutation({
        mutationFn: updateUserProfileApi,
        onSuccess: () => {
            alert('Profile updated successfully!');
        },
        onError: (error) => {
            alert('Error updating profile');
        },
    });

    const initialValues = {
        fullName: user?.fullName || '',
        role_name: user?.role_name || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Name is required'),
        role_name: Yup.string().required('Role is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
    });

    const handleSubmit = (values) => {
        const data = {
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
        };
        updateUserProfile(data);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form className="profile-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} md={6}>
                            <BootstrapForm.Group controlId="fullName">
                                <BootstrapForm.Label>Name</BootstrapForm.Label>
                                <Field name="fullName">
                                    {({ field, meta }) => (
                                        <BootstrapForm.Control
                                            type="text"
                                            {...field}
                                            isInvalid={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                                <BootstrapForm.Control.Feedback type="invalid">
                                    <Field name="fullName" component="div" />
                                </BootstrapForm.Control.Feedback>
                            </BootstrapForm.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <BootstrapForm.Group controlId="role_name">
                                <BootstrapForm.Label>Role</BootstrapForm.Label>
                                <Field name="role_name" disabled>
                                    {({ field, meta }) => (
                                        <BootstrapForm.Control
                                            disabled
                                            type="text"
                                            {...field}
                                            isInvalid={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                                <BootstrapForm.Control.Feedback type="invalid">
                                    <Field name="role_name" component="div" />
                                </BootstrapForm.Control.Feedback>
                            </BootstrapForm.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <BootstrapForm.Group controlId="email">
                                <BootstrapForm.Label>Email</BootstrapForm.Label>
                                <Field name="email">
                                    {({ field, meta }) => (
                                        <BootstrapForm.Control
                                            disabled
                                            type="email"
                                            {...field}
                                            isInvalid={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                                <BootstrapForm.Control.Feedback type="invalid">
                                    <Field name="email" component="div" />
                                </BootstrapForm.Control.Feedback>
                            </BootstrapForm.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <BootstrapForm.Group controlId="phoneNumber">
                                <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                                <Field name="phoneNumber">
                                    {({ field, meta }) => (
                                        <BootstrapForm.Control
                                            type="text"
                                            {...field}
                                            isInvalid={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                                <BootstrapForm.Control.Feedback type="invalid">
                                    <Field name="phoneNumber" component="div" />
                                </BootstrapForm.Control.Feedback>
                            </BootstrapForm.Group>
                        </Col>
                    </Row>
                    <div className="form-actions">
                        <Button type="submit" className="save-button" disabled={isSubmitting}>
                            Save
                        </Button>
                        <Button type="button" className="cancel-button" onClick={() => window.location.reload()}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm;
