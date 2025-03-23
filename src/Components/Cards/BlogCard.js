'use client';
import { Button, Card, Col, Image } from 'react-bootstrap';
import {
  MdArrowForward,
  MdOutlineCalendarMonth,
  MdOutlineComment,
} from 'react-icons/md';
import { useRouter } from 'next/navigation';
import './Card.css';

const BlogCard = ({ blog }) => {
  const router = useRouter();

  const handleReadMore = () => {
    // Convert blog title to URL-friendly slug
    const slug = blog.blog_title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    router.push(`/blogs/${slug}`);
  };

  return (
    <Card className="h-100 blog-card">
      <Card.Img
        loading="lazy"
        variant="top"
        src={blog.blog_cover}
        alt={blog.blog_title}
        className="blog-card-img"
      />
      <Card.Body className="blog-card-body">
        <div className="d-flex align-items-center justify-content-between blog-card-subcontent">
          <div className="">
            <MdOutlineCalendarMonth style={{ verticalAlign: '-2px' }} />{' '}
            <span>{blog.blog_published}</span>
          </div>
          <div className="">
            <MdOutlineComment style={{ verticalAlign: '-3px' }} />{' '}
            <span>0 comments</span>
          </div>
        </div>
        <Card.Title className="custom-text-truncate-2 blog-card-title pt-3">
          {blog.blog_title}
        </Card.Title>
        <Card.Text
          className="custom-text-truncate-5 blog-card-desc"
          style={{ textAlign: 'justify' }}
        >
          {blog.blog_desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="blog-card-footer">
        <div className="">
          <Image
            src="../assets/user.jpg"
            roundedCircle
            className="blog-card-avatar"
            alt="user-image"
          />
          <span className="ms-2 blog-card-username">{blog.blog_author}</span>
        </div>

        <Button
          size="sm"
          className="blog-card-btn accent-btn"
          onClick={handleReadMore}
        >
          Read <MdArrowForward style={{ verticalAlign: '-3px' }} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
