"use client";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../Components/Cards/BlogCard";
import SectionHeader from "../../Components/Typography/SectionHeader";
import { blogs } from "./data";

const PageWrapper = () => {
  return (
    <>
      <TopBackground
        title="CHURCH BLOG"
        desc="Explore our collection of spiritual insights, community updates, and faith-building stories."
      />
      <div className="container blogs-page">
        <Container className="my-5">
          <Row className="my-5">
            <p className="text-center">
              Welcome to our church blog, where we share inspiring stories,
              spiritual insights, and community updates. Our blog serves as a
              platform to strengthen faith, foster community, and share God's
              work in our lives. Whether you're seeking guidance, inspiration,
              or simply want to stay connected with our church family, you'll
              find valuable content here.
            </p>
          </Row>

          <SectionHeader title="Latest Posts" />

          <Row className="blog-grid">
            {blogs.map((blog, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                <div className="blog-card-wrapper">
                  <BlogCard blog={blog} />
                </div>
              </Col>
            ))}
          </Row>

          <hr className="my-5" />

          <SectionHeader title="Categories" />
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={8}>
              <div className="category-grid">
                {[
                  "Faith",
                  "Prayer",
                  "Christian Living",
                  "Service",
                  "Community",
                  "Events",
                ].map((category, index) => (
                  <div key={index} className="category-box">
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageWrapper;
