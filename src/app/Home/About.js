'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Home/About.css';
import SectionHeader from '../../Components/Typography/SectionHeader';
import Paragraph from '../../Components/Typography/Paragraph';

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <div className="text-center mb-4">
          <SectionHeader title={"About Us"} description={"Learn about our mission, beliefs, and community."} />
        </div>
        <Row className="align-items-center">
          <Col lg={5} className="order-lg-1 order-2">
            <img
              loading="lazy"
              src="../assets/about.jpg"
              alt="about_image"
              className="img-fluid"
            />
          </Col>
          <Col lg={7} className="order-lg-2 order-1">
            <Paragraph content={`At Christian Evangelical Assembly Church, we are dedicated to spreading the love and teachings of Jesus Christ. Our mission is to create a welcoming space where individuals and families can grow spiritually, find hope, and build meaningful connections.
              We believe in the power of faith, prayer, and service. Through our worship gatherings, outreach programs, and community initiatives, we aim to make a positive impact in the lives of our members and beyond. Whether you are new to faith or looking for a place to belong, we invite you to join us on this journey of love, grace, and transformation.`} />
            <Link href="/" className="link-a">
              Read more
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
