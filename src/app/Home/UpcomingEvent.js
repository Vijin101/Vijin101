"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import "../Styles/Home/UpcomingEvent.css";
import EventCard from "../../Components/Cards/EventCard";

const UpcomingEvent = () => {
  const event = [
    {
      event_name: "Event Name",
      event_date: ["01-01-2024", "05-01-2023"],
      event_time: ["08:00 Am", "10:00 Am"],
      event_location: "Event Location",
      event_img: "../assets/about.jpg",
      event_short_description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ratione iste beatae accusamus consequatur nostrum illo fugit facilis reiciendis repellat vero recusandae, numquam iusto eligendi ut laborum aspernatur dolorum vel.",
      event_contact: { phone_number: "9090909090", email: "abc@gamil.com" },
    },
    {
      event_name: "Event Name",
      event_date: ["01-01-2024", "05-01-2023"],
      event_time: ["08:00 Am", "10:00 Am"],
      event_location: "Event Location",
      event_img: "../assets/about.jpg",
      event_short_description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ratione iste beatae accusamus consequatur nostrum illo fugit facilis reiciendis repellat vero recusandae, numquam iusto eligendi ut laborum aspernatur dolorum vel.",
      event_contact: { phone_number: "9090909090", email: "abc@gamil.com" },
    },
    {
      event_name: "Event Name",
      event_date: ["01-01-2024", "05-01-2023"],
      event_time: ["08:00 Am", "10:00 Am"],
      event_location: "Event Location",
      event_img: "../assets/about.jpg",
      event_short_description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ratione iste beatae accusamus consequatur nostrum illo fugit facilis reiciendis repellat vero recusandae, numquam iusto eligendi ut laborum aspernatur dolorum vel.",
      event_contact: { phone_number: "9090909090", email: "abc@gamil.com" },
    },
    {
      event_name: "Event Name",
      event_date: ["01-01-2024", "05-01-2023"],
      event_time: ["08:00 Am", "10:00 Am"],
      event_location: "Event Location",
      event_img: "../assets/about.jpg",
      event_short_description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ratione iste beatae accusamus consequatur nostrum illo fugit facilis reiciendis repellat vero recusandae, numquam iusto eligendi ut laborum aspernatur dolorum vel.",
      event_contact: { phone_number: "9090909090", email: "abc@gamil.com" },
    },
  ];
  return (
    <div className="upcomming-event-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <h5 className="home-section-title">Upcomming Events</h5>
          <h3 className="home-section-desc">
            Stay updated on our upcoming gatherings and activities.
          </h3>
        </div>
        <div className="">
          <Row xs={1}>
            {event.map((e, i) => (
              <Col className="py-2" key={i}>
                <AnimatePresence key={i}>
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                    transition={{ duration: 0.4 }}
                  >
                    <EventCard event={e} />
                  </motion.div>
                </AnimatePresence>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default UpcomingEvent;
