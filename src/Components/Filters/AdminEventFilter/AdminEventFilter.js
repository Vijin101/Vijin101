import React from 'react';
import './AdminEventFilter.css';
import { Col, Row } from 'react-bootstrap';
import TextInput from '../../InputFields/TextInput';
import { FaSearch } from 'react-icons/fa';
import CustomAutocompleteInput from '../../InputFields/CustomAutocompleteInput';
import SelectInput from '../../InputFields/SelectInput';

const eventOptions = [
    { value: "all", label: "All Events" },
    { value: "service", label: "Services" },
    { value: "study", label: "Bible Studies" },
    { value: "prayer", label: "Prayer Meetings" },
    { value: "practice", label: "Practices" },
];

const eventStatus = [
    { value: "", label: "All" },
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
]


const AdminEventFilter = ({ filter, setFilter, }) => {
    const [type, setType] = React.useState(filter.type);
    const [search, setSearch] = React.useState(filter.search);
    const [status, setStatus] = React.useState(filter.status);
    return (
        <Row className="mb-4">
            <Col md={6}>
                <TextInput size="small" label="Search" placeholder="Search members..." value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} iconLeft={<FaSearch />} />
            </Col>
            <Col md={3}>
                <CustomAutocompleteInput options={eventOptions} size="small" label="Event Type" placeholder="Select Event Type" value={type} onChange={(selectedValues) => { setType(selectedValues); setFilter({ ...filter, type: selectedValues }) }} />
            </Col>
            <Col md={3}>
                <SelectInput options={eventStatus} size="small" label="Event Status" placeholder="Select Event Status" value={status} onChange={(e) => { setStatus(e.target.value); setFilter({ ...filter, status: e.target.value }) }} />
            </Col>
        </Row>
    );
}

export default AdminEventFilter;