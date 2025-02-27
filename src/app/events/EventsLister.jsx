"use client";

import { Col, Row } from "react-bootstrap";

import dynamic from "next/dynamic";
import { event } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import EventCard from "../../Components/Cards/EventCard";

// const EventCard = dynamic(() => import("../../Components/Cards/EventCard"), {
//   ssr: false,
//   loading: () => <p>Loading products...</p>,
// });

const EventsLister = () => {
  return (
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
  );
};

export default EventsLister;
