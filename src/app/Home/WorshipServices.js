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
import SectionHeader from '../../Components/Typography/SectionHeader';

const WorshipServices = () => {
  const services = [
    {
      service_img: '../assets/sunday_service.webp',
      service_name: 'Sunday Service',
      service_day: "Sunday",
      service_time: '10:00 AM',
      service_location: 'Y.M.C.A Muzhucode',
    },
    {
      service_img: '../assets/mrng_prayer.webp',
      service_name: 'Morning Prayer',
      service_day: "Everyday",
      service_time: '05:00 AM',
      service_location: 'Google Meet',
    },
    {
      service_img: '../assets/youth.webp',
      service_name: 'Youth Meeting',
      service_day: "Sunday",
      service_time: '05:30 PM',
      service_location: 'Themanoor',
    },
    {
      service_img: '../assets/bible_study.webp',
      service_name: 'Bible Study',
      service_day: "Thursday",
      service_time: '07:00 PM',
      service_location: 'Google Meet',
    },
    {
      service_img: '../assets/fastingprayer.webp',
      service_name: 'Fasting Prayer',
      service_day: "Friday",
      service_time: '10:00 AM',
      service_location: 'Themanoor',
    },
    {
      service_img: '../assets/pre_meeting.webp',
      service_name: 'Preperation Meeting',
      service_day: "Saturday",
      service_time: '07:00 PM',
      service_location: 'Themanoor',
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
        <div className=" mb-5 text-center">
          <SectionHeader title={"Worship Services"} description={" Experience the joy of regular worship with our faith community."} />
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          removeArrowOnDeviceType={['mobile']}
          customTransition="transform 500ms ease-in-out" // Adjust transition speed
          transitionDuration={500} // Ensure smooth transition
          autoPlaySpeed={6000} // Increase speed to prevent early reset
          pauseOnHover={true}
          arrows={true}
          rewind={true} // Prevents abrupt reset
          rewindWithAnimation={true} // Smooth rewind

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
