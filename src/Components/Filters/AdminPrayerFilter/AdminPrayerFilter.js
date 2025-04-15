import React from 'react';
import './AdminPrayerFilter.css';
import { Col, Row } from 'react-bootstrap';
import TextInput from '../../InputFields/TextInput';
import { FaSearch } from 'react-icons/fa';
import CustomAutocompleteInput from '../../InputFields/CustomAutocompleteInput';
import SelectInput from '../../InputFields/SelectInput';


const publlishOptions = [
    { value: "", label: "All" },
    { value: "1", label: "Public" },
    { value: "2", label: "Private" },
];

const prayerStatus = [
    { value: "", label: "All" },
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
]


const AdminPrayerFilter = ({ filter, setFilter, }) => {
    const [publish, setPublish] = React.useState(filter.publish);
    const [search, setSearch] = React.useState(filter.search);
    const [status, setStatus] = React.useState(filter.status);
    return (
        <Row className="mb-4">
            <Col md={6}>
                <TextInput size="small" label="Search" placeholder="Search members..." value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} iconLeft={<FaSearch />} />
            </Col>
            <Col md={3}>
                <SelectInput options={prayerStatus} size="small" label="Prayer Status" placeholder="Select Prayer Status" value={status} onChange={(e) => { setStatus(e.target.value); setFilter({ ...filter, status: e.target.value }) }} />
            </Col>
            <Col md={3}>
                <SelectInput options={publlishOptions} size="small" label="Publish Status" placeholder="Select Publish Status" value={publish} onChange={(e) => { setPublish(e.target.value); setFilter({ ...filter, publish: e.target.value }) }} />
            </Col>
        </Row>
    );
}

export default AdminPrayerFilter;