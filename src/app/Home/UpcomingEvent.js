"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import "../Styles/Home/UpcomingEvent.css";
import EventCard from "../../Components/Cards/EventCard";
import SectionHeader from "../../Components/Typography/SectionHeader";

const UpcomingEvent = () => {
  const event = [
    {
      event_name: "Federation Meeting",
      event_date: ["01-01-2025", "05-01-2025"],
      event_time: ["08:00 AM", "10:00 AM"],
      event_location: "Main Church Hall",
      event_img: "../assets/fedaration_meeting.webp",
      event_short_description:
        "Join us for an important gathering where church leaders and members come together to discuss upcoming initiatives, community outreach, and the vision for the new year. Your presence and prayers are highly valued.",
      event_contact: { phone_number: "9090909090", email: "abc@gmail.com" },
    },
    {
      event_name: "Church Tour & Fellowship",
      event_date: ["01-01-2025", "01-01-2025"],
      event_time: ["10:00 AM", "02:00 PM"],
      event_location: "Church Premises",
      event_img: "../assets/church_tour.webp",
      event_short_description:
        "Come and explore the history, mission, and future of our church. This tour is designed for new members and visitors to learn more about our faith, community programs, and worship services.",
      event_contact: { phone_number: "9090909090", email: "abc@gmail.com" },
    },
  ];

  return (
    <div className="upcomming-event-section">
      <Container>
        <div className="mb-4 text-center">
          <SectionHeader title={"Upcoming Events"} description={"Stay updated on our upcoming gatherings and activities."} />
        </div>
        <div className="">
          <Row xs={1}>
            {event.map((e, i) => (
              <Col className="py-2" key={i}>
                <AnimatePresence key={i}>
                  <motion.div
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
