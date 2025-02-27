'use client';
import BlogCard from '../../Components/Cards/BlogCard';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      blog_title: 'title here',
      blog_cover: '../assets/blogimg.jpg',
      blog_desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vero asperiores vel, dolorem consectetur quod ut nisi porro quis sequi corrupti eos quibusdam eaque expedita esse molestias nihil laboriosam. Distinctio?',
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'title here',
      blog_cover: '../assets/about.jpg',
      blog_desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vero asperiores vel, dolorem consectetur quod ut nisi porro quis sequi corrupti eos quibusdam eaque expedita esse molestias nihil laboriosam. Distinctio?',
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'title here',
      blog_cover: '../assets/about.jpg',
      blog_desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vero asperiores vel, dolorem consectetur quod ut nisi porro quis sequi corrupti eos quibusdam eaque expedita esse molestias nihil laboriosam. Distinctio?',
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
    {
      blog_title: 'title here gdfg  gt tr ttr  tyry  hfh hyh rryt',
      blog_cover: '../assets/about.jpg',
      blog_desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vero asperiores vel, dolorem consectetur quod ut nisi porro quis sequi corrupti eos quibusdam eaque expedita esse molestias nihil laboriosam. Distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vero asperiores vel, dolorem consectetur quod ut nisi porro quis sequi corrupti eos quibusdam eaque expedita esse molestias nihil ',
      blog_author: 'Author Name',
      blog_category: 'Category',
      blog_published: '20-10-2030',
    },
  ];
  return (
    <div className="blogs-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <h5 className="home-section-title">Church Blog</h5>
          <h3 className="home-section-desc">
            Explore our blog for spiritual insights, community updates, and
            faith-building stories.
          </h3>
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
