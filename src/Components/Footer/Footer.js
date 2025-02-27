'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col>
            <Link className="text-center" href="/">
              <div className="col-4 col-md-1 mx-auto">
                <img src={'/assets/logo.png'} alt={'logo'} className="img-fluid" />
              </div>
              <div className="">
                <span className="ps-2">My App</span>
              </div>
            </Link>
          </Col>
        </Row>
        <Row md={3} xs={1}>
          <Col>
            <ul>
              <h6>Quick Links</h6>
              <li>
                <Link href={'/'}>About us</Link>
              </li>
              <li>
                <Link href={'/'}>Events</Link>
              </li>
              <li>
                <Link href={'/'}>Gallery</Link>
              </li>
              <li>
                <Link href={'/'}>Blog</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h6>Contact Us</h6>
              <li>
                13B, Abc street, Abc District <br /> India - 629177.
              </li>
              <li>abc@gamil.com</li>
              <li>+919090909090</li>
            </ul>
          </Col>
          <Col className="">
            <ul>
              <h6>Loaction</h6>
              <li>
                <iframe
                  width={'100%'}
                  height={'200'}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.7049679537513!2d77.2580237547024!3d8.32552083603601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04544bf721aa41%3A0xec10d9429c30e8fd!2sAttoor%20Junction!5e0!3m2!1sen!2sin!4v1696071034594!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="d-flex">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
