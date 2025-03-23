"use client";
import React from "react";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row } from "react-bootstrap";
import ListGallery from "../../Components/Gallery/ListGallery/ListGallery";

const PageWrapper = () => {
  const allImages = [
    { id: 1, src: "/assets/sunday_service.webp", alt: "Sunday Service" },
    { id: 2, src: "/assets/mrng_prayer.webp", alt: "Morning Prayer" },
    { id: 3, src: "/assets/bible_study.webp", alt: "Bible Study" },
    { id: 4, src: "/assets/youth.webp", alt: "Youth Group" },
    { id: 5, src: "/assets/fastingprayer.webp", alt: "Fasting Prayer" },
    { id: 6, src: "/assets/pre_meeting.webp", alt: "Pre Meeting" },
    {
      id: 7,
      src: "/assets/fedaration_meeting.webp",
      alt: "Federation Meeting",
    },
    { id: 8, src: "/assets/church_tour.webp", alt: "Church Tour" },
    { id: 9, src: "/assets/blog1.jpg", alt: "Special Event" },
    { id: 10, src: "/assets/blog2.jpg", alt: "Church Activity" },
    { id: 11, src: "/assets/blog3.jpg", alt: "Community Event" },
    { id: 12, src: "/assets/blog4.jpg", alt: "Church Gathering" },
    { id: 13, src: "/assets/slide1.jpg", alt: "Church Gathering" },
    { id: 14, src: "/assets/slide2.jpg", alt: "Church Gathering" },
    { id: 15, src: "/assets/slide3.jpg", alt: "Church Gathering" },
    { id: 16, src: "/assets/slide4.jpg", alt: "Church Gathering" },
    { id: 17, src: "/assets/slide5.jpg", alt: "Church Gathering" },
    { id: 18, src: "/assets/slide6.jpg", alt: "Church Gathering" },
  ];

  return (
    <>
      <TopBackground
        title="GALLERY"
        desc="Capturing Moments of Faith, Fellowship, and Celebration"
      />
      <div className="container gallery-page">
        <div>
          <Container className="text-center my-5">
            <Row className="my-5">
              <p>
                Welcome to our church gallery! Here you'll find a collection of
                special moments, celebrations, and memories from our church
                community. From Sunday services to special events, these images
                capture the spirit and fellowship of our congregation.
              </p>
            </Row>

            <ListGallery images={allImages} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
