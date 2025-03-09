import dayjs from "dayjs";
import { Card, Col, Row } from "react-bootstrap";
import { MdAccessTimeFilled, MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import "./Card.css";

const EventCard = ({ event }) => {
  return (
    <Card className="event-card">
      <Row>
        {/* Event Image */}
        <Col lg={3} className="event-img-container">
          <Card.Img loading="lazy" className="event-img" src={event.event_img} />
        </Col>

        {/* Event Details */}
        <Col lg={4} className="event-details">
          <Card.Body>
            <Card.Title className="event-title">{event.event_name}</Card.Title>
            <Card.Text className="event-description">{event.event_short_description}</Card.Text>
          </Card.Body>
        </Col>

        {/* Event Date & Time */}
        <Col lg={2} className="event-date-container">
          <Card.Body>
            <Row className="gy-2">
              {event.event_date.map((date, index) => (
                <Col key={index} className="event-date-box" lg={12} sm={6} xs={6}>
                  <div className="event-date-header">{dayjs(date).format("MMM YYYY")}</div>
                  <div className="event-date-body">{dayjs(date).format("DD")}</div>
                  <div className="event-date-footer">
                    <MdAccessTimeFilled /> {event.event_time[index]}
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Col>

        {/* Contact Info */}
        <Col lg={3} className="event-contact">
          <Card.Footer>
            <Card.Text className="contact-info">
              <MdLocationPin className="icon" /> {event.event_location}
            </Card.Text>
            <Card.Text className="contact-info">
              <MdPhone className="icon" /> {event.event_contact?.phone_number}
            </Card.Text>
            <Card.Text className="contact-info">
              <MdEmail className="icon" /> {event.event_contact?.email}
            </Card.Text>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;
