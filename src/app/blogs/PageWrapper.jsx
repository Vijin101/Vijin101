"use client";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../Components/Cards/BlogCard";
import SectionHeader from "../../Components/Typography/SectionHeader";

const PageWrapper = () => {
  const blogs = [
    {
      blog_title: "Walking by Faith: Trusting God in Uncertain Times",
      blog_cover: "../assets/blog1.jpg",
      blog_desc: `Life is full of uncertainties, but God's promises remain steadfast. Discover how to cultivate unwavering faith, find peace in the midst of challenges, and trust in God's perfect plan for your life.`,
      blog_author: "Author Name",
      blog_category: "Faith",
      blog_published: "20-10-2030",
    },
    {
      blog_title: "The Power of Prayer: Transforming Your Spiritual Journey",
      blog_cover: "../assets/blog2.jpg",
      blog_desc: `Prayer is more than words—it's a powerful connection with God. Learn how to deepen your prayer life, experience spiritual breakthroughs, and strengthen your relationship with the Lord.`,
      blog_author: "Author Name",
      blog_category: "Prayer",
      blog_published: "20-10-2030",
    },
    {
      blog_title: "Living a Christ-Centered Life in a Busy World",
      blog_cover: "../assets/blog3.jpg",
      blog_desc: `In the hustle of daily life, it's easy to lose focus on Christ. Explore practical ways to keep God at the center of your work, relationships, and personal growth while navigating modern challenges.`,
      blog_author: "Author Name",
      blog_category: "Christian Living",
      blog_published: "20-10-2030",
    },
    {
      blog_title: `Serving Others: Reflecting Christ's Love Through Action`,
      blog_cover: "../assets/blog4.jpg",
      blog_desc: `Jesus calls us to love and serve others selflessly. This blog explores how small acts of kindness, generosity, and compassion can be a testimony of Christ's love in our communities and beyond.`,
      blog_author: "Author Name",
      blog_category: "Service",
      blog_published: "20-10-2030",
    },
  ];

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
