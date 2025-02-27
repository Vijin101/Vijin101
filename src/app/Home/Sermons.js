'use client';
import '../Styles/Home/Sermons.css';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import SermonCard from '../../Components/Cards/SermonCard';

const Sermons = () => {
  const apiKey = 'AIzaSyBfS_nwusCkC2hlmvVsajvHwAUpUdL97Io';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCtnga9utXi0Y3SYIYf0X6nw&part=snippet,id&order=date&maxResults=8`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error('Error fetching YouTube videos:', error);
      });
  }, []);

  return (
    <div className="sermons-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <h5 className="home-section-title">Our Sermons</h5>
          <h3 className="home-section-desc">
            Nourish your soul with our uplifting sermons and teachings.
          </h3>
        </div>
        <div className="video-list">
          <Row lg={4} sm={2} xs={1}>
            {videos.map((video) => (
              <Col key={video.id.videoId} className="video py-2">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SermonCard video={video} />
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Sermons;
