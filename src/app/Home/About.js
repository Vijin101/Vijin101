'use client';

import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/About.css';

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <div className=" text-center mb-4">
          <h5 className="home-section-title">About Us</h5>
          <h3 className="home-section-desc">
            Learn about our mission, beliefs, and community.
          </h3>
        </div>
        <Row lg={2} xs={1}>
          <Col
            xl={5}
            lg={4}
            className=" align-items-stretch order-md-0 order-1 pt-md-0 pt-3"
            order={2}
          >
            <img
              loading="lazy"
              src="../assets/about.jpg"
              alt="about_image"
              className="img-fluid"
            />
          </Col>
          <Col xl={7} lg={8} order={1} className="order-md-1 order-0">
            <p className="aboutus-content pt-lg-0 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              amet, dolorem sed reiciendis recusandae est rerum laboriosam
              totam, ab maiores libero doloribus? Quaerat natus at quos
              praesentium accusantium? Veritatis, est. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Optio doloremque possimus,
              architecto natus voluptatibus libero, nobis id cupiditate nostrum
              ratione excepturi omnis placeat non a dolore, laboriosam incidunt
              quo soluta. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Magni amet, dolorem sed reiciendis recusandae est rerum
              laboriosam totam, ab maiores libero doloribus? Quaerat natus at
              quos praesentium accusantium? Veritatis, est. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Optio doloremque possimus,
              architecto natus voluptatibus libero, nobis id cupiditate nostrum
              ratione excepturi omnis placeat non a dolore, laboriosam incidunt
              quo soluta.{' '}
            </p>
            <Link href={'/'} className="pb-3">
              Read more
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
