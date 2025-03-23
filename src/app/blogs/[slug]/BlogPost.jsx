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

  // This would typically come from an API or database
  const blog = {
    blog_title: "Walking by Faith: Trusting God in Uncertain Times",
    blog_cover: "../assets/blog1.jpg",
    blog_desc: `Life is full of uncertainties, but God's promises remain steadfast. Discover how to cultivate unwavering faith, find peace in the midst of challenges, and trust in God's perfect plan for your life.`,
    blog_author: "Author Name",
    blog_category: "Faith",
    blog_published: "20-10-2030",
    blog_tags: ["Faith", "Trust", "Prayer", "Christian Living"],
    blog_content: `
      <p>In a world filled with uncertainty and challenges, walking by faith becomes more than just a phrase—it becomes a way of life. As believers, we are called to trust in God's promises even when the path ahead seems unclear.</p>

      <h2>The Foundation of Faith</h2>
      <p>Faith is not the absence of doubt, but rather the presence of trust in something greater than ourselves. The Bible tells us that "faith is the substance of things hoped for, the evidence of things not seen" (Hebrews 11:1). This powerful truth reminds us that our faith is built on the solid foundation of God's character and promises.</p>

      <h2>Finding Peace in Challenges</h2>
      <p>When we face difficult circumstances, it's natural to feel anxious and uncertain. However, Scripture reminds us to "be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God" (Philippians 4:6). Through prayer and meditation on God's Word, we can find peace that surpasses all understanding.</p>

      <h2>Trusting in God's Plan</h2>
      <p>One of the most challenging aspects of walking by faith is surrendering our own plans and trusting in God's perfect timing. The prophet Jeremiah reminds us that God has plans to prosper us and not to harm us, plans to give us hope and a future (Jeremiah 29:11).</p>

      <h2>Practical Steps for Walking by Faith</h2>
      <ul>
        <li>Daily prayer and meditation on Scripture</li>
        <li>Surrounding yourself with fellow believers</li>
        <li>Keeping a gratitude journal</li>
        <li>Sharing your faith journey with others</li>
      </ul>

      <p>Remember, walking by faith is a journey, not a destination. Each day presents new opportunities to trust in God's promises and experience His faithfulness in our lives.</p>
    `,
  };

  // Related posts data (would typically come from API)
  const relatedPosts = [
    {
      title: "The Power of Prayer",
      cover: "../assets/blog2.jpg",
      category: "Prayer",
      readTime: "5 min read",
    },
    {
      title: "Living a Christ-Centered Life",
      cover: "../assets/blog3.jpg",
      category: "Christian Living",
      readTime: "7 min read",
    },
    {
      title: "Serving Others",
      cover: "../assets/blog4.jpg",
      category: "Service",
      readTime: "6 min read",
    },
  ];

  const handleRelatedPostClick = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    router.push(`/blogs/${slug}`);
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
                    onClick={() => handleRelatedPostClick(post.title)}
                  >
                    <img src={post.cover} alt={post.title} />
                    <div className={styles.relatedPostContent}>
                      <Badge bg="secondary" className={styles.categoryBadge}>
                        {post.category}
                      </Badge>
                      <h4>{post.title}</h4>
                      <span className={styles.readTime}>{post.readTime}</span>
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
