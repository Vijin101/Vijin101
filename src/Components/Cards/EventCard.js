import dayjs from "dayjs";
import { Card, Col, Row } from "react-bootstrap";
import {
  MdAccessTimeFilled,
  MdEmail,
  MdLocationPin,
  MdPhone,
} from "react-icons/md";
import "./Card.css";

const EventCard = ({ event }) => {
  return (
    <Card className="event-card">
      <Row>
        <Col lg={3}>
          {" "}
          <Card.Img loading="lazy" variant="" src={event.event_img} />
        </Col>
        <Col lg={4}>
          <Card.Body>
            <Card.Title>{event.event_name}</Card.Title>
            <Card.Text>{event.event_short_description}</Card.Text>
          </Card.Body>
        </Col>
        <Col lg={2}>
          <Card.Body>
            <Row className="gy-2">
              <Col className="event-date-box" lg={12} sm={6} xs={6}>
                <div className="event-date-box-header">
                  {dayjs(event.event_date[0]).format("MMM YYYY")}
                </div>
                <div className="event-date-box-body">
                  {dayjs(event.event_date[0]).format("DD")}
                </div>
                <div className="event-date-box-footer">
                  <div className="">{event.event_time[0]}</div>
                </div>
              </Col>
              <Col className="event-date-box" lg={12} sm={6} xs={6}>
                <div className="event-date-box-header">
                  {dayjs(event.event_date[1]).format("MMM YYYY")}
                </div>
                <div className="event-date-box-body">
                  {dayjs(event.event_date[1]).format("DD")}
                </div>
                <div className="event-date-box-footer">
                  <div className="">{event.event_time[1]}</div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Col>
        <Col>
          <Card.Footer lg={3}>
            <Card.Text>
              <MdLocationPin /> {event.event_location}
            </Card.Text>
            <Card.Text>
              <MdPhone /> {event.event_contact?.phone_number}
            </Card.Text>
            <Card.Text>
              <MdEmail /> {event.event_contact?.email}
            </Card.Text>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;
