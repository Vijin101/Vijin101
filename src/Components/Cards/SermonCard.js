'use client';

import dayjs from 'dayjs';
import { Card } from 'react-bootstrap';
import './Card.css';

const SermonCard = ({ video }) => {
  const date = dayjs(video.snippet.publishedAt).format('DD');
  const month = dayjs(video.snippet.publishedAt).format('MMM');
  const year = dayjs(video.snippet.publishedAt).format('YYYY');
  console.log(date, month, year);
  return (
    <Card className="h-100 sermon-card">
      <Card.Img
        loading="lazy"
        variant="top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="sermon-card-img"
      />
      {/* <Card.Body className="sermon-card-body"> */}
      <div className="sermon-card-publish">
        <div className="sermon-card-month">{month}</div>
        <div className="sermon-card-date">{date}</div>
        <div className="sermon-card-year">{year}</div>
      </div>
      {/* <Card.Title className="sermon-card-title">
          {video.snippet.title}
        </Card.Title> */}
      {/* </Card.Body> */}
    </Card>
  );
};

export default SermonCard;
