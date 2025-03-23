"use client";
import { useRouter } from "next/navigation";
import TopBackground from "../../../Components/TopBackground/TopBackground";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Form,
  Image,
} from "react-bootstrap";
import {
  MdArrowBack,
  MdOutlineCalendarMonth,
  MdOutlineComment,
  MdPerson,
  MdShare,
  MdBookmarkBorder,
  MdBookmark,
  MdFavoriteBorder,
  MdFavorite,
  MdVisibility,
  MdSend,
} from "react-icons/md";
import { useState, useEffect } from "react";
import styles from "./BlogPost.module.css";
import CommentSection from "../../../Components/Comments/CommentSection";
import { blogs } from "../data";

const BlogPost = ({ slug }) => {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [readCount, setReadCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Simulate fetching comments from an API
  const fetchedComments = [
    {
      id: 1,
      author: "John Doe",
      content: "This is such an inspiring message! Thank you for sharing.",
      date: "2024-03-15",
      avatar: "../assets/user.jpg",
    },
    {
      id: 2,
      author: "Sarah Smith",
      content: "I needed to read this today. God's timing is always perfect.",
      date: "2024-03-14",
      avatar: "../assets/user.jpg",
    },
  ];

  useEffect(() => {
    // Simulate loading comments and read count
    setComments(fetchedComments);
    setReadCount(156); // Example read count
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      author: "Current User", // This would come from auth system
      content: newComment,
      date: new Date().toISOString().split("T")[0],
      avatar: "../assets/user.jpg",
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const blog = blogs.find((blog) => blog.blog_id === slug);

  // Add check for blog existence
  if (!blog) {
    return (
      <Container className="my-5">
        <div className="text-center">
          <h2>Blog post not found</h2>
          <p>The requested blog post could not be found.</p>
          <Button variant="primary" onClick={() => router.push("/blogs")}>
            Return to Blogs
          </Button>
        </div>
      </Container>
    );
  }

  const relatedPosts = blogs.filter(
    (post) =>
      post.blog_tags.some((tag) => blog.blog_tags.includes(tag)) &&
      post.blog_id !== slug
  );

  const handleRelatedPostClick = (blog_id) => {
    router.push(`/blogs/${blog_id}`);
  };

  return (
    <>
      <TopBackground title={blog.blog_title} desc={blog.blog_category} />
      <div className="container blogs-page">
        <Container className="my-5">
          <div className={styles.blogContent}>
            <div className={styles.blogHeader}>
              <div className={styles.blogMeta}>
                <div className={styles.metaItem}>
                  <MdOutlineCalendarMonth /> {blog.blog_published}
                </div>
                <div className={styles.metaItem}>
                  <MdPerson /> {blog.blog_author}
                </div>
                <div className={styles.metaItem}>
                  <MdOutlineComment /> {comments.length} Comments
                </div>
                <div className={styles.metaItem}>
                  <MdVisibility /> {readCount} Reads
                </div>
              </div>
              <div className={styles.blogActions}>
                <Button
                  variant="link"
                  className={styles.actionButton}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  {isBookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
                </Button>
                <Button
                  variant="link"
                  className={styles.actionButton}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
                </Button>
                <Button variant="link" className={styles.actionButton}>
                  <MdShare />
                </Button>
              </div>
            </div>

            <img
              src={blog.blog_cover}
              alt={blog.blog_title}
              className={styles.blogImage}
            />

            <div className={styles.blogTags}>
              {blog.blog_tags.map((tag, index) => (
                <Badge key={index} bg="" className={styles.tag}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div
              className={styles.blogText}
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />

            <CommentSection blogId={slug} />
          </div>

          <hr className="my-5" />

          <div className={styles.relatedPosts}>
            <h3>Related Posts</h3>
            <Row>
              {relatedPosts.map((post, index) => (
                <Col key={index} md={4}>
                  <div
                    className={styles.relatedPost}
                    onClick={() => handleRelatedPostClick(post.blog_id)}
                  >
                    <img src={post.blog_cover} alt={post.blog_title} />
                    <div className={styles.relatedPostContent}>
                      <Badge bg="secondary" className={styles.categoryBadge}>
                        {post.blog_category}
                      </Badge>
                      <h4>{post.blog_title}</h4>
                      <span className={styles.readTime}>
                        {post.blog_published}
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogPost;
