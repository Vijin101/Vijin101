'use client';

import { Carousel, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/Testimonials.css';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import SectionHeader from '../../Components/Typography/SectionHeader';

const Testimonials = () => {
  const testimonial = [
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'John D',
      user_loaction: 'Location here',
      user_comment:
        'Attending Christian Evangelical Assembly has been a life-changing experience for me. The warmth of the congregation, the powerful sermons, and the unwavering support from the church community have strengthened my faith and brought me closer to God. I now walk in His light with confidence and joy',
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Sarah M',
      user_loaction: 'Location here',
      user_comment:
        'I came to this church during one of the toughest seasons of my life. The love, prayers, and encouragement I received helped me heal and find peace. This church is more than a place of worship—it’s a family that truly cares.',
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'David & Emily K',
      user_loaction: 'Location here',
      user_comment:
        `Being part of Christian Evangelical Assembly has helped my entire family grow spiritually. The children's ministry has been a blessing for my kids, and the fellowship has strengthened our bond with God.We are grateful for this amazing community!`,
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Rachel S',
      user_loaction: 'Location here',
      user_comment:
        'Through the teachings and guidance of this church, I have discovered my true purpose in Christ. The inspiring messages and passionate worship have deepened my faith and motivated me to serve others with love and compassion.',
    },
  ];
  return (
    <div className="testimonial-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <SectionHeader title={"Testimonials"} description={"Discover stories of faith, transformation, and the impact of our community through the heartfelt words of our members."} />
        </div>
        <Row>
          <Carousel
            slide
            className=""
            interval={6000}
            pause={true}
            controls={false}

          //   onSlid={(e) => {
          //     setIndex(e);
          //   }}
          >
            {testimonial.map((e, i) => (
              <Carousel.Item key={i} className="text-center ">
                <div className=" col-md-9 mx-auto">
                  <div className="">
                    <p className="text-start  testiminial-icon">
                      <BiSolidQuoteAltLeft />
                    </p>
                    <p className="text-center testimonial-content">
                      {e.user_comment}
                    </p>
                    <h5 className="testiminial-name">- {e.user_name}</h5>
                    <p className="text-end  testiminial-icon">
                      <BiSolidQuoteAltRight />
                    </p>
                  </div>

                  {/* <div className="">
                    <div className=" mx-auto overflow-hidden testiminial-profile">
                      <img
                        src={e.user_profile}
                        alt="user-profile"
                        className="rounded-circle"
                      />
                    </div>
                    <h5 className="testiminial-name">{e.user_name}</h5>
                    <p className="testiminial-location">{e.user_loaction}</p>
                  </div> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
