'use client';
import BlogCard from '../../Components/Cards/BlogCard';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/Blogs.css';
import SectionHeader from '../../Components/Typography/SectionHeader';
import { MdArrowForward } from 'react-icons/md';
import Link from 'next/link';
import { blogs } from '../blogs/data';

const Blogs = () => {

  return (
    <div className="blogs-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <SectionHeader title={"Church Blog"} description={"Explore our blog for spiritual insights, community updates, and faith-building stories."} />
        </div>
        <div className="blog-list">
          <Row lg={4} sm={2} xs={1}>
            {blogs.slice(0, 4).map((e, i) => (
              <Col key={i} className="video py-2">
                <BlogCard blog={e} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="text-center mt-5">
          <Link href="/blogs" className="text-decoration-none">
            <Button
              className="read-more-btn accent-btn"
              size="lg"
            >
              Read More Blogs <MdArrowForward style={{ verticalAlign: '-2px', marginLeft: '2px' }} />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
