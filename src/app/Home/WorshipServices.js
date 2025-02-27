'use client';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdAccessTimeFilled, MdLocationPin } from 'react-icons/md';
import '../Styles/Home/WorshipServices.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from 'framer-motion';
import { useRef, useState } from 'react';
import WorshipCard from '../../Components/Cards/WorshipCard';

const WorshipServices = () => {
  const services = [
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
    {
      service_img: '../assets/about.jpg',
      service_name: 'Sunday Service',
      service_time: '10:00 AM',
      service_location: 'Arumani',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="worship-section">
      <Container className="marquee-container" id="scroll-content">
        <div className="worship-section-header mb-5 text-center">
          <h5 className="home-section-title">Worship Services</h5>
          <h3 className="home-section-desc">
            Experience the joy of regular worship with our faith community.
          </h3>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          removeArrowOnDeviceType={['mobile']}
          infinite={true}
          customTransition="transform 1500ms ease-in-out "
          className="pt-5"
        >
          {services.map((e, i) => (
            <Col className="px-sm-1  py-2 position-relative" key={i}>
              <AnimatePresence>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  whileHover={{
                    transition: { duration: 0.4 },
                    translateY: -10,
                    scale: 1.009,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <WorshipCard data={e} />
                </motion.div>
              </AnimatePresence>
            </Col>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default WorshipServices;
