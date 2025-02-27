'use client';

import { Carousel } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import '../Styles/Home/Hero.css';
import { useState } from 'react';

const Hero = () => {
  const heroItem = [
    {
      title: 'Welcome to Our Church',
      paragraph: 'Join us in worship and fellowship.',
      img: '../assets/slide1.jpg',
    },
    {
      title: 'Sunday Services',
      paragraph: 'Experience the presence of god every sunday.',
      img: '../assets/slide2.jpg',
    },
    {
      title: 'Community Outreach',
      paragraph: 'We are committed to serving our community.',
      img: '../assets/slide3.jpg',
    },
  ];

  const [index, setIndex] = useState(0);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.08 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="hero-section">
      <div className="hero-outer-box">
        <Carousel
          fade
          className=" hero-contanier"
          interval={6000}
          pause={false}
          indicators={false}
          onSlid={(e) => {
            setIndex(e);
          }}
        >
          {heroItem.map((e, i) => (
            <Carousel.Item key={i}>
              <div className="hero-bg-layer"></div>
              <img loading="lazy" className="" src={e.img} alt="First slide" />
              {i === index && (
                <div className="carousel-content">
                  <AnimatePresence>
                    <motion.h1
                      className="text-center load-screen--message"
                      variants={sentence}
                      initial="hidden"
                      animate="visible"
                      exit={sentence.hidden}
                      transition={{
                        duration: 1,
                        repeatType: 'Infinity',
                        repeatDelay: 5,
                      }}
                    >
                      {e.title.split('').map(
                        (char, id) =>
                          i === index && (
                            <AnimatePresence  key={id}>
                              <motion.span
                                key={id}
                                variants={letter}
                                exit={letter.hidden}
                                transition={{
                                  repeatType: 'Infinity',
                                  repeatDelay: 5,
                                }}
                              >
                                {char}
                              </motion.span>
                            </AnimatePresence>
                          )
                      )}
                    </motion.h1>
                  </AnimatePresence>
                  <AnimatePresence>
                    <motion.p
                      className="text-center load-screen--message"
                      variants={sentence}
                      initial="hidden"
                      animate="visible"
                      exit={sentence.hidden}
                      transition={{
                        duration: 1,
                        repeatType: 'Infinity',
                        repeatDelay: 5,
                      }}
                    >
                      {e.paragraph.split('').map(
                        (char, id) =>
                          i === index && (
                            <AnimatePresence  key={id}>
                              <motion.span
                                key={id}
                                variants={letter}
                                exit={letter.hidden}
                                transition={{
                                  repeatType: 'Infinity',
                                  repeatDelay: 5,
                                }}
                              >
                                {char}
                              </motion.span>
                            </AnimatePresence>
                          )
                      )}
                    </motion.p>
                  </AnimatePresence>
                </div>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
