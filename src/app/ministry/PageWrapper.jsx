"use client";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPrayingHands,
  FaHandsHelping,
  FaBible,
  FaUsers,
  FaMusic,
  FaChild,
  FaHeart,
  FaChurch,
} from "react-icons/fa";
import SectionHeader from "../../Components/Typography/SectionHeader";
import SubTitle from "../../Components/Typography/SubTitle";

const PageWrapper = () => {
  // Ministry Items with Icons
  const ministryItems = [
    {
      icon: <FaPrayingHands />,
      title: "Prayer Ministry",
      text: "Dedicated to intercessory prayer and spiritual warfare for the church and community.",
    },
    {
      icon: <FaBible />,
      title: "Bible Study",
      text: "In-depth study of God's Word to grow in knowledge and understanding.",
    },
    {
      icon: <FaUsers />,
      title: "Youth Ministry",
      text: "Engaging young people in faith, fellowship, and service to God.",
    },
    {
      icon: <FaMusic />,
      title: "Worship Ministry",
      text: "Leading the congregation in praise and worship through music and song.",
    },
    {
      icon: <FaChild />,
      title: "Children's Ministry",
      text: "Nurturing young hearts in the love and knowledge of Jesus Christ.",
    },
    {
      icon: <FaHeart />,
      title: "Outreach Ministry",
      text: "Serving the community and sharing God's love with those in need.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service Ministry",
      text: "Practical service and support for church members and the community.",
    },
    {
      icon: <FaChurch />,
      title: "Evangelism",
      text: "Spreading the Gospel and making disciples of all nations.",
    },
  ];

  return (
    <>
      <TopBackground
        title="MINISTRIES"
        desc="Serving God and Community Through Various Ministries"
      />
      <div className="container ministry-page">
        <div>
          <Container className="text-center my-5">
            <Row className="my-5">
              <p>
                At Christian Evangelical Assembly Church, we believe that every
                member has a unique role to play in God's kingdom. Our various
                ministries provide opportunities for everyone to serve, grow,
                and make a difference in the lives of others. Whether you're
                passionate about worship, teaching, outreach, or service,
                there's a place for you to use your gifts and talents for God's
                glory.
              </p>
            </Row>

            {/* Ministries Grid */}
            <SectionHeader title="Our Ministries" />
            <Row className="justify-content-center mt-4">
              {ministryItems.map((item, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <div className="ministry-box">
                    <div className="ministry-icon">{item.icon}</div>
                    <h3 className="mt-3">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <hr className="my-5" />

            {/* Get Involved Section */}
            <SectionHeader title="Get Involved" />
            <Row className="align-items-center mt-4">
              <Col md={8} className="mx-auto">
                <div className="involvement-box">
                  <p>
                    We invite you to explore our ministries and find where God
                    is calling you to serve. Whether you're a long-time member
                    or new to our church, there are many ways to get involved
                    and make a difference in our community.
                  </p>
                  <p>
                    Contact our church office or speak with any ministry leader
                    to learn more about how you can participate in these vital
                    areas of service.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
