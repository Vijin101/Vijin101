"use client";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaChurch,
  FaPrayingHands,
  FaHandsHelping,
  FaBible,
} from "react-icons/fa";
import SectionHeader from "../../Components/Typography/SectionHeader";
import SubTitle from "../../Components/Typography/SubTitle";

const PageWrapper = () => {
  // Vision Items with Icons
  const visionItems = [
    { icon: <FaChurch />, text: "Worship in Truth and Spirit" },
    { icon: <FaPrayingHands />, text: "Bring Souls to Jesus" },
    { icon: <FaHandsHelping />, text: "Support Missionary Organizations" },
    { icon: <FaBible />, text: "Help the Poor & Needy" },
    { icon: <FaChurch />, text: "Build a Church Every Year" },
  ];

  // Mission Items with Icons
  const missionItems = [
    {
      icon: <FaBible />,
      text: "Molding Non-Believers as Born-Again Believers",
    },
    { icon: <FaPrayingHands />, text: "Training Believers" },
    { icon: <FaChurch />, text: "Praying Earnestly" },
    { icon: <FaHandsHelping />, text: "Doing Charity" },
  ];

  return (
    <>
      <TopBackground
        title="ABOUT US"
        desc={"A Place of Worship, Faith, and Transformation"}
      />
      <div className="container aboutus-page ">
        <div>
          <Container className="text-center my-5">
            <Row className="my-5">
              <p>
                At Christian Evangelical Assembly Church, we are dedicated to
                spreading the love and teachings of Jesus Christ. Our mission is
                to create a welcoming space where individuals and families can
                grow spiritually, find hope, and build meaningful connections.
                We believe in the power of faith, prayer, and service. Through
                our worship gatherings, outreach programs, and community
                initiatives, we aim to make a positive impact in the lives of
                our members and beyond. Whether you are new to faith or looking
                for a place to belong, we invite you to join us on this journey
                of love, grace, and transformation.
              </p>
            </Row>
            {/* Our Vision Section */}
            <SectionHeader title={"Our Vision"} />
            <Row className="justify-content-center mt-2">
              {visionItems.map((item, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                  <div className="vision-box">
                    {item.icon}
                    <p className="mt-2">{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <hr className="my-5" />

            {/* Our Mission Section */}
            <SectionHeader title={"Our Mission"} />
            <Row className="justify-content-center mt-2">
              {missionItems.map((item, index) => (
                <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                  <div className="mission-box">
                    {item.icon}
                    <p className="mt-2">{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <hr className="my-5" />

            {/* Community Section */}
            <SectionHeader title={"Our Community"} />

            <Row className="align-items-center mt-2">
              <div className="mission-box ">
                <p className="">
                  At Apostolic Revival Congregation, we believe that the church
                  is not just a building but a community of believers united in
                  love for God and for one another. We are committed to creating
                  a welcoming and inclusive environment where everyone can feel
                  at home.
                </p>
              </div>
            </Row>

            <hr className="my-5" />

            <Row className="my-5 history-section align-items-stretch mx-0">
              <Col
                xs={12}
                md={5}
                className="history-left text-center text-md-start"
              >
                <SectionHeader title="OUR HISTORY" />
              </Col>
              <Col xs={12} md={7} className="history-right">
                <SubTitle title={"Christian Evangelical Assembly"} />
                <p>
                  By the benevolent grace of God and as per His will, the ARC
                  seed was sown on the day of 20th September 1991 in Abu Dhabi,
                  the capital city of UAE, and then started as a full-fledged
                  Church, named the ABU DHABI APOSTOLIC CHURCH (ADAC) at St.
                  Andrew Church Centre. The founding Member was Rev. Dr. Joseph
                  Anderson Rajkumar, and he was pastoring the Church by God’s
                  grace until 2009. Due to unexpected circumstances, he had to
                  leave the country in 2009. Since then, the church has been led
                  by a newly formed Church committee under the leadership of
                  Pastor D.J. John Selvaraj, along with Pastor Paul Pounraj,
                  Pastor Shadrach, and many other brothers serving the Lord
                  together.
                </p>
                <p>
                  As per government requirements, the Church name was changed to
                  Apostolic Revival Congregation (ARC) on 21st August 2020.
                  Hereafter, the ADAC will be called ARC.
                </p>
                <p>
                  Since its inception, Almighty God has blessed the Church. The
                  Holy Spirit has worked in the hearts of many, leading them to
                  accept Christ as their personal Saviour and obey the Lord in
                  water baptism. Many believers from other Christian
                  denominations also participate.
                </p>
                <p>
                  We worship every **Sunday at St. Andrew Church (07:00 - 08:30
                  AM)**, and every **Monday & Wednesday at BCC Musaffah (08:30 -
                  09:30 PM)**. Services are conducted in Tamil and English, with
                  most congregation members being Tamil-speaking believers from
                  Tamil Nadu, India.
                </p>
              </Col>
            </Row>
            <hr className="my-5" />
            {/* Pastor message */}

            <SectionHeader title={"PASTOR'S MESSAGE"} />

            <Row className="my-5 history-section  mx-0">
              <Col xs={12} md={7} className="history-right">
                <p>Dear Beloved Children of God,</p>

                <p>
                  Greetings to you all in the matchless name of our Lord &
                  Savior Jesus Christ.
                </p>

                <p>
                  First of all, I thank the Lord God Almighty for giving me this
                  wonderful opportunity to express my joy & gratitude for all
                  the marvelous things He has done & been doing in our lives.
                  Much thankful to Heavenly Father for enabling ARC blossom to
                  these many beautiful years. It is not easy to pass a single
                  moment without His Grace and Mercy, & undoubtedly God’s Grace
                  has been boundless throughout the past years. A small seed
                  sowed in the year 1991 has grown so much fruitful by meeting
                  our Mission & Vision with the efforts of all. I am so glad to
                  see this day. I thank the entire congregation for being
                  sincere, dedicated & supportive through all the valleys, hills
                  & mountains ARC travelled through in building His kingdom &
                  fulfilling His purpose in our lives. ARC aims to cultivate
                  growing a meaningful & positive relationship with God.
                </p>

                <p>
                  May God’s goodness & love be present in each one of your
                  lives, as you continue to grow in deep respect towards one
                  another. May His word strengthen you from day-to-day & may
                  each of you walk in double portion of God’s Anointing,
                  Blessings & Fullness of His Spirit. Come & enjoy your worship
                  time with us!
                </p>

                <p>May God Bless You!</p>
              </Col>
              <Col xs={12} md={5} className="message-right ">
                <img
                  src="/assets/pastor.jpg"
                  alt="Pastor Akinas"
                  className=""
                />
                <div className="">
                  <SubTitle title={"Rev. Akinas Simon"} />
                  <p>Senior Pastor</p>
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
