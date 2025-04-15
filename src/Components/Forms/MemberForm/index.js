import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaSave, FaTimes } from 'react-icons/fa';
import './MemberForm.css';
import { useRoleStore } from '../../../store/roleStore';
import TextInput from '../../InputFields/TextInput';
import EmailInput from '../../InputFields/EmailInput';
import NumberInput from '../../InputFields/NumberInput';
import SelectInput from '../../InputFields/SelectInput';
import CheckboxInput from '../../InputFields/CheckboxInput';
import { IconButtonWithLabel, OutlineIconButtonWithLabel } from '../../Buttons/Button';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    role_id: Yup.string().required('Role is required'),
    email_verification: Yup.boolean(),
    phone_verification: Yup.boolean(),
    user_status: Yup.string().required('Status is required'),
});



const MemberForm = ({ onSubmit, onCancel, initialData = null }) => {

    // only get this values from initial data
    const initialValues = {
        fullName: initialData?.fullName || '',
        email: initialData?.email || '',
        phoneNumber: initialData?.phoneNumber || '',
        role_id: initialData?.role_id || '',
        email_verification: initialData?.email_verification || false,
        phone_verification: initialData?.phone_verification || false,
        user_status: initialData?.user_status || '1',
    };

    console.log(initialData);
    const { roleList } = useRoleStore();
    console.log(roleList);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting
            }) => (
                <Form onSubmit={handleSubmit} className="member-form">
                    <Row className="mb-4">
                        <Col md={12}>
                            <TextInput
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.fullName && errors.fullName}
                                placeholder="Enter full name"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.fullName}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <EmailInput
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.email && errors.email}
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                            <TextInput
                                label="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.phoneNumber && errors.phoneNumber}
                                placeholder="Enter phone number"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <SelectInput
                                label="Role"
                                name="role_id"
                                options={roleList.map(role => ({ value: role.role_id, label: role.role_name }))}
                                value={values.role_id}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.role_id && errors.role_id}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.role_id}
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                            <SelectInput
                                label="Status"
                                name="user_status"
                                options={[
                                    { value: "1", label: "Active" },
                                    { value: "2", label: "Inactive" },
                                    { value: "3", label: "Blocked" }
                                ]}
                                value={values.user_status}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.user_status && errors.user_status}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.user_status}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <CheckboxInput
                                label="Email Verified"
                                checked={values.email_verification}
                                onChange={handleChange}
                                name="email_verification"
                            />
                        </Col>
                        <Col md={6}>
                            <CheckboxInput
                                label="Phone Verified"
                                checked={values.phone_verification}
                                onChange={handleChange}
                                name="phone_verification"
                            />
                        </Col>
                    </Row>
                    <div className="form-actions">
                        <OutlineIconButtonWithLabel
                            label="Cancel"
                            disabled
                            onClick={onCancel}
                            icon={<FaTimes className="me-2" />}
                        />
                        <IconButtonWithLabel
                            label="Save"
                            type="submit"
                            disabled={isSubmitting}
                            variant="primary"
                            loading={isSubmitting}
                            icon={<FaSave className="me-2" />}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MemberForm; 