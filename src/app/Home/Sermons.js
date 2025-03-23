'use client';
import '../Styles/Home/Sermons.css';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import SermonCard from '../../Components/Cards/SermonCard';
import SectionHeader from '../../Components/Typography/SectionHeader';
import { MdArrowForward } from 'react-icons/md';

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
          <SectionHeader title={"Our Sermons"} description={"Nourish your soul with our uplifting sermons and teachings."} />
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
        <div className="text-center mt-5">
          <Button
            href="https://www.youtube.com/@ceachurchattoor"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn accent-btn"
            size="lg"
          >
            Watch More Sermons <MdArrowForward style={{ verticalAlign: '-2px', marginLeft: '2px' }} />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Sermons;
