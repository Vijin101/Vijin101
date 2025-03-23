"use client";
import React from "react";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserFriends, FaInfoCircle } from "react-icons/fa";

const PageWrapper = () => {
  return (
    <div>
      <TopBackground
        title="FAMILY REGISTRATION"
        desc="Join Our Church Family"
      />
      <div className="container family-registration-page">
        <div>
          <Container className="text-center my-5">
            <Row className="my-5">
              <Col md={8} className="mx-auto">
                <div className="registration-intro">
                  <FaUserFriends className="intro-icon" />
                  <h2>Welcome to Our Church Family</h2>
                  <p>
                    We're excited to have you join our church community! Please
                    fill out the registration form below to become a member of
                    our church family. This will help us better serve you and
                    keep you informed about church activities and events.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="my-5">
              <Col md={4} className="mb-4">
                <div className="info-box">
                  <FaInfoCircle className="info-icon" />
                  <h3>Important Information</h3>
                  <ul>
                    <li>Please fill out all required fields</li>
                    <li>Include accurate contact information</li>
                    <li>Add all family members who wish to register</li>
                    <li>You can update your information later</li>
                  </ul>
                </div>
              </Col>
              <Col md={8}>
                <div className="form-container">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdH-3dYMpaZ05FFcbmmUXF2ERZroR2YFm9V0T2EG1QKUk_pBQ/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Family Registration Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </Col>
            </Row>

            <Row className="my-5">
              <Col md={8} className="mx-auto">
                <div className="contact-info">
                  <h3>Need Help?</h3>
                  <p>
                    If you encounter any issues with the registration form or
                    have questions, please contact our church office at{" "}
                    <a href="mailto:contact@church.com">contact@church.com</a>{" "}
                    or call us at <a href="tel:+1234567890">(123) 456-7890</a>.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
