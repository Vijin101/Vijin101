import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaSave, FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import './EventForm.css';
import TextInput from '../../InputFields/TextInput';
import TextareaInput from '../../InputFields/TextareaInput';
import DateInput from '../../InputFields/DateInput';
import TimeInput from '../../InputFields/TimeInput';
import NumberInput from '../../InputFields/NumberInput';
import SelectInput from '../../InputFields/SelectInput';
import ToggleSwitch from '../../InputFields/ToggleSwitch';
import { IconButtonWithLabel, OutlineIconButtonWithLabel } from '../../Buttons/Button';
import { Button } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    isMultiDay: Yup.boolean().default(false),
    location: Yup.string().required('Location is required'),
    type: Yup.string().required('Type is required'),
    status: Yup.string().required('Status is required'),

    endDate: Yup.string().when('isMultiDay', {
        is: true,
        then: () => Yup.string().required('End date is required'),
        otherwise: () => Yup.string().notRequired(),
    }),

    endTime: Yup.string().when('isMultiDay', {
        is: true,
        then: () => Yup.string().required('End time is required'),
        otherwise: () => Yup.string().notRequired(),
    }),

    schedule: Yup.array().when('isMultiDay', {
        is: true,
        then: () =>
            Yup.array()
                .of(
                    Yup.object().shape({
                        day: Yup.string().required('Date is required'),
                        activities: Yup.array()
                            .of(
                                Yup.object().shape({
                                    time: Yup.string().required('Time is required'),
                                    description: Yup.string().required('Description is required'),
                                })
                            )
                            .min(1, 'At least one activity is required'),
                    })
                )
                .min(1, 'At least one schedule day is required'),
        otherwise: () => Yup.array().notRequired(),
    }),
});



const EventForm = ({ onSubmit, onCancel, initialData = null, loading }) => {
    console.log('EventForm initialData:', initialData);
    const initialValues = {
        title: initialData?.title || '',
        description: initialData?.description || '',
        date: initialData?.date || '',
        time: initialData?.time || '',
        isMultiDay: initialData?.isMultiDay || false,
        endDate: initialData?.endDate || '',
        endTime: initialData?.endTime || '',
        location: initialData?.location || '',
        type: initialData?.type || 'service',
        status: initialData?.status || '1',
        schedule: initialData?.schedule || (initialData?.isMultiDay ? [{ day: '', activities: [{ time: '', description: '' }] }] : [])
    };

    const typeOptions = [
        { value: 'service', label: 'Service' },
        { value: 'study', label: 'Bible Study' },
        { value: 'prayer', label: 'Prayer Meeting' },
        { value: 'practice', label: 'Practice' },
        { value: 'retreat', label: 'Retreat' }
    ];

    const statusOptions = [
        { value: '1', label: 'Active' },
        { value: '2', label: 'Inactive' },
    ];


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                values,
                isSubmitting,
                setFieldValue
            }) => (
                <Form className="event-form">
                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Event Title"
                                name="title"
                                placeholder="Enter event title"
                                helperText={<ErrorMessage name="title" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextareaInput}
                                label="Description"
                                name="description"
                                placeholder="Enter event description"
                                helperText={<ErrorMessage name="description" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={6}>
                            <Field
                                as={DateInput}
                                label="Date"
                                name="date"
                                helperText={<ErrorMessage name="date" />}
                            />
                        </Col>
                        <Col md={6}>
                            <Field
                                as={TimeInput}
                                label="Time"
                                name="time"
                                helperText={<ErrorMessage name="time" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <Field
                                as={TextInput}
                                label="Location"
                                name="location"
                                placeholder="Enter event location"
                                helperText={<ErrorMessage name="location" />}
                            />
                        </Col>

                    </Row>

                    <Row className="mb-4">
                        <Col md={6}>
                            <Field
                                as={SelectInput}
                                label="Type"
                                name="type"
                                options={typeOptions}
                                helperText={<ErrorMessage name="type" />}
                            />
                        </Col>
                        <Col md={6}>
                            <Field
                                as={SelectInput}
                                label="Status"
                                name="status"
                                options={statusOptions}
                                helperText={<ErrorMessage name="status" />}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={12}>
                            <ToggleSwitch
                                label="Multi-day Event"
                                name="isMultiDay"
                                checked={values.isMultiDay}
                                onChange={() => {
                                    const newValue = !values.isMultiDay;
                                    setFieldValue('isMultiDay', newValue);
                                    if (!newValue) {
                                        setFieldValue('endDate', '');
                                        setFieldValue('endTime', '');
                                        setFieldValue('schedule', []);
                                    } else {
                                        if (!values.schedule || values.schedule.length === 0) {
                                            setFieldValue('schedule', [{ day: '', activities: [{ time: '', description: '' }] }]);
                                        }
                                    }
                                }}
                            />
                        </Col>
                    </Row>

                    {values.isMultiDay && (
                        <>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Field
                                        as={DateInput}
                                        label="End Date"
                                        name="endDate"
                                        helperText={<ErrorMessage name="endDate" />}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Field
                                        as={TimeInput}
                                        label="End Time"
                                        name="endTime"
                                        helperText={<ErrorMessage name="endTime" />}
                                    />
                                </Col>
                            </Row>

                            <FieldArray name="schedule">
                                {({ push: pushSchedule, remove: removeSchedule }) => (
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h5>Schedule</h5>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => pushSchedule({ day: '', activities: [{ time: '', description: '' }] })}
                                            >
                                                <FaPlus className="me-2" /> Add Day
                                            </Button>
                                        </div>

                                        {values.schedule.map((scheduleItem, scheduleIndex) => (
                                            <Card key={scheduleIndex} className="mb-3">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h6>Day {scheduleIndex + 1}</h6>
                                                        <Button
                                                            variant="outline-danger"
                                                            size="sm"
                                                            onClick={() => removeSchedule(scheduleIndex)}
                                                        >
                                                            <FaTrash />
                                                        </Button>
                                                    </div>

                                                    <Field
                                                        as={DateInput}
                                                        label="Date"
                                                        name={`schedule[${scheduleIndex}].day`}
                                                        helperText={<ErrorMessage name={`schedule[${scheduleIndex}].day`} />}
                                                    />

                                                    <FieldArray name={`schedule[${scheduleIndex}].activities`}>
                                                        {({ push: pushActivity, remove: removeActivity }) => (
                                                            <div className="mt-3">
                                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                                    <h6>Activities</h6>
                                                                    <Button
                                                                        variant="outline-primary"
                                                                        size="sm"
                                                                        onClick={() => pushActivity({ time: '', description: '' })}
                                                                    >
                                                                        <FaPlus className="me-2" /> Add Activity
                                                                    </Button>
                                                                </div>

                                                                {scheduleItem.activities.map((activity, activityIndex) => (
                                                                    <div key={activityIndex} className="activity-group mb-3">
                                                                        <div className="d-flex gap-3">
                                                                            <div className="flex-grow-1">
                                                                                <Field
                                                                                    as={TimeInput}
                                                                                    label="Time"
                                                                                    name={`schedule[${scheduleIndex}].activities[${activityIndex}].time`}
                                                                                    helperText={<ErrorMessage name={`schedule[${scheduleIndex}].activities[${activityIndex}].time`} />}
                                                                                />
                                                                            </div>
                                                                            <div className="flex-grow-1">
                                                                                <Field
                                                                                    as={TextInput}
                                                                                    label="Description"
                                                                                    name={`schedule[${scheduleIndex}].activities[${activityIndex}].description`}
                                                                                    placeholder="Activity description"
                                                                                    helperText={<ErrorMessage name={`schedule[${scheduleIndex}].activities[${activityIndex}].description`} />}
                                                                                />
                                                                            </div>
                                                                            <div className="d-flex align-items-end">
                                                                                <Button
                                                                                    variant="outline-danger"
                                                                                    size="sm"
                                                                                    onClick={() => removeActivity(activityIndex)}
                                                                                >
                                                                                    <FaTrash />
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>
                        </>
                    )}

                    <div className="form-actions">
                        <OutlineIconButtonWithLabel
                            label="Cancel"
                            disabled={loading}
                            onClick={onCancel}
                            icon={<FaTimes className="me-2" />}
                        />
                        <IconButtonWithLabel
                            label="Save"
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

export default EventForm;