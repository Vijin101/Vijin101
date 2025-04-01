'use client';

import ProfileForm from '../../../../Components/Forms/ProfileForm/ProfileForm';
import { useAuthStore } from '../../../../store';
import './profile.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function ProfilePage() {
    const { user } = useAuthStore();

    return (
        <Container className="profile-container">
            <h1 className="profile-title">Profile</h1>
            <Row className="profile-info">

                <Col xs={12}>
                    <ProfileForm />
                </Col>
            </Row>
        </Container>
    );
}
