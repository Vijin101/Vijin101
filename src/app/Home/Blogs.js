'use client';
import BlogCard from '../../Components/Cards/BlogCard';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/Blogs.css';
import SectionHeader from '../../Components/Typography/SectionHeader';

const Blogs = () => {
  const blogs = [
    {
      blog_title: 'Walking by Faith: Trusting God in Uncertain Times',
      blog_cover: '../assets/blog1.jpg',
      blog_desc:
        `Life is full of uncertainties, but God's promises remain steadfast.Discover how to cultivate unwavering faith, find peace in the midst of challenges, and trust in God's perfect plan for your life.`,
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'The Power of Prayer: Transforming Your Spiritual Journey',
      blog_cover: '../assets/blog2.jpg',
      blog_desc: `Prayer is more than words—it’s a powerful connection with God. Learn how to deepen your prayer life, experience spiritual breakthroughs, and strengthen your relationship with the Lord.`,
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'Living a Christ-Centered Life in a Busy World',
      blog_cover: '../assets/blog3.jpg',
      blog_desc: `In the hustle of daily life, it's easy to lose focus on Christ. Explore practical ways to keep God at the center of your work, relationships, and personal growth while navigating modern challenges.`,
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'Serving Others: Reflecting Christ’s Love Through Action',
      blog_cover: '../assets/blog4.jpg',
      blog_desc: `Jesus calls us to love and serve others selflessly. This blog explores how small acts of kindness, generosity, and compassion can be a testimony of Christ’s love in our communities and beyond.`,
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
  ];
  return (
    <div className="blogs-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <SectionHeader title={"Church Blog"} description={"Explore our blog for spiritual insights, community updates, and faith-building stories."} />
        </div>
        <div className="blog-list">
          <Row lg={4} sm={2} xs={1}>
            {blogs.map((e, i) => (
              <Col key={i} className="video py-2">
                <BlogCard blog={e} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
