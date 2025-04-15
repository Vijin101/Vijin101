import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SecondaryButton } from "../../Buttons/Button";
import "./DashboardHeader.css";

const DashboardHeader = ({ title, isButton = false, onClick, icon, label }) => {
    return (
        <div className="dashboard-header-section mb-4">
            <Container fluid>
                <Row className="align-items-center">
                    <Col>
                        <h4 className="dashboard-page-title ">{title}</h4>
                    </Col>
                    {isButton && (
                        <Col xs="auto">
                            <SecondaryButton
                                label={label}
                                onClick={onClick}
                                icon={icon}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default DashboardHeader;