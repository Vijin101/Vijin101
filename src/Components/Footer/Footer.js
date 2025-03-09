'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section py-5">
      <Container>
        <Row md={4} xs={1} className="g-4 border-bottom pb-4">
          <Col className="d-flex flex-column align-items-center text-center">
            <Link href="/">
              <img src="/assets/logo2.png" alt="Church Logo" className="col-6 mb-3" />
            </Link>
            <p className="footer-about">
              At Christian Evangelical Assembly, we are dedicated to spreading the love of Christ, nurturing faith, and empowering believers to live according to God's purpose. Our mission is to build a strong spiritual foundation through worship, discipleship, and community outreach.
            </p>
          </Col>
          <Col className="border-start ps-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link href="/">About us</Link></li>
              <li><Link href="/">Events</Link></li>
              <li><Link href="/">Gallery</Link></li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </Col>
          <Col className="border-start ps-4">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled footer-contact">
              <li>13B, Abc Street, Abc District<br />India - 629177</li>
              <li>abc@gmail.com</li>
              <li>+91 9090909090</li>
            </ul>
          </Col>
          <Col className="border-start ps-4">
            <h6 className="fw-bold mb-3">Location</h6>
            <iframe
              width="100%"
              height="180"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.7049679537513!2d77.2580237547024!3d8.32552083603601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04544bf721aa41%3A0xec10d9429c30e8fd!2sAttoor%20Junction!5e0!3m2!1sen!2sin!4v1696071034594!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="rounded border"
            ></iframe>
          </Col>
        </Row>

        <Row className="py-4 border-bottom">
          <Col className="d-flex justify-content-center gap-3">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="fs-1" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="fs-1" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="fs-1" />
            </Link>
          </Col>
        </Row>

        <Row className="pt-3">
          <Col className="text-center footer-copyright">
            &copy; 2025 Christian Evangelical Assembly Church. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
