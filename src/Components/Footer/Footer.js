'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col>
            <Link href="/" className="d-inline-block">
              <Image
                src="/assets/logo2.png"
                alt="Church Logo"
                width={100}
                height={100}
                className="footer-logo"
              />
            </Link>
          </Col>
        </Row>
        <Row className="footer-main-content">
          {/* Logo and About Column */}
          <Col lg={4} md={6} className="footer-about-col mb-4 mb-lg-0">

            <p className="footer-about">
              At Christian Evangelical Assembly, we are dedicated to spreading the love of Christ,
              nurturing faith, and empowering believers to live according to God's purpose.
              Our mission is to build a strong spiritual foundation through worship, discipleship,
              and community outreach.
            </p>
          </Col>

          {/* Quick Links Column */}
          <Col lg={2} md={6} className="footer-links-col mb-4 mb-lg-0">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/contactus">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Contact Info Column */}
          <Col lg={3} md={6} className="footer-contact-col mb-4 mb-lg-0">
            <h6 className="footer-heading">Contact Info</h6>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>CEA Church, Attoor, Kanniyakumari, Tamilnadu, 629177</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>srakinas@gmail.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+91 8825850313</span>
              </li>
            </ul>
          </Col>

          {/* Location Column */}
          <Col lg={3} md={6} className="footer-map-col">
            <h6 className="footer-heading">Location</h6>
            <div className="map-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26557.308598790965!2d77.24792218027947!3d8.325882231027062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04544819aafe05%3A0x6930e8c41bdc6045!2sAttoor%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sae!4v1742731393957!5m2!1sen!2sae"
                allowFullScreen=""
                loading="lazy"
                className="footer-map"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Social Links */}
        <div className="footer-social">
          <div className="social-links">
            <Link href="https://www.facebook.com/groups/182331901823493" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/cea_church_media/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/@ceachurchattoor" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Christian Evangelical Assembly Church. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
