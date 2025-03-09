'use client';
import { Card } from 'react-bootstrap';
import { MdAccessTimeFilled, MdLocationPin } from 'react-icons/md';
import './Card.css';

const WorshipCard = ({ data }) => {
  return (
    <Card className="worship-card">
      <div className="worship-card-img-wrapper">
        <Card.Img
          className="worship-card-img"
          loading="lazy"
          variant="top"
          src={data.service_img}
        />
      </div>
      <Card.Body className="worship-card-body">
        <Card.Title className="worship-card-title">
          {data.service_name}
        </Card.Title>
        <Card.Text className="worship-card-text">
          <MdAccessTimeFilled /> {data.service_day} {data.service_time}
        </Card.Text>
        <Card.Text className="worship-card-text">
          <MdLocationPin /> {data.service_location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorshipCard;
