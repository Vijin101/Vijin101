import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaSave, FaTimes } from 'react-icons/fa';
import './PrayerRequestForm.css';

import TextInput from '../../InputFields/TextInput';
import TextareaInput from '../../InputFields/TextareaInput';
import ToggleSwitch from '../../InputFields/ToggleSwitch';
import { IconButtonWithLabel, OutlineIconButtonWithLabel } from '../../Buttons/Button';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').nullable(),
    phone_number: Yup.string().nullable(),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Prayer message is required'),
    status: Yup.boolean().default(false),
    publish: Yup.boolean().default(false),
});


const PrayerRequestForm = ({ onSubmit, onCancel, initialData = null, loading }) => {
    const initialValues = {
        name: initialData?.name || '',
        email: initialData?.email || '',
        phone_number: initialData?.phone_number || '',
        subject: initialData?.subject || '',
        message: initialData?.message || '',
        status: initialData ? initialData.status === "1" ? false : true : false,
        publish: initialData ? initialData.publish === "1" ? true : false : false,
    };

    console.log(initialValues);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="prayer-request-form">
                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Your Name"
                                name="name"
                                placeholder="Enter your name"
                                helperText={<ErrorMessage name="name" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Email (optional)"
                                name="email"
                                placeholder="Enter your email"
                                helperText={<ErrorMessage name="email" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Phone Number (optional)"
                                name="phone_number"
                                placeholder="Enter your phone number"
                                helperText={<ErrorMessage name="phone_number" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Subject"
                                name="subject"
                                placeholder="Subject of the request"
                                helperText={<ErrorMessage name="subject" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextareaInput}
                                label="Prayer Message"
                                name="message"
                                placeholder="Write your prayer request here"
                                helperText={<ErrorMessage name="message" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={6}>
                            <ToggleSwitch
                                label="Make this viewed"
                                name="status"
                                checked={values.status}
                                onChange={() => setFieldValue('status', !values.status)}
                            />
                        </Col>
                        <Col md={6}>
                            <ToggleSwitch
                                label="Make this public"
                                name="publish"
                                checked={values.publish}
                                onChange={() => setFieldValue('publish', !values.publish)}
                            />
                        </Col>
                    </Row>



                    <div className="form-actions">
                        <OutlineIconButtonWithLabel
                            label="Cancel"
                            disabled={loading}
                            onClick={onCancel}
                            icon={<FaTimes className="me-2" />}
                        />
                        <IconButtonWithLabel
                            label="Submit"
                            type="submit"
                            disabled={loading}
                            variant="primary"
                            loading={loading}
                            icon={<FaSave className="me-2" />}
                        />
                    </div>
                </Form>
            )}
        </Formik>

    );
};

export default PrayerRequestForm;
