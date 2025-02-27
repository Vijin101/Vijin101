'use client';

import { Carousel, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Home/Testimonials.css';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const Testimonials = () => {
  const testimonial = [
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Name here',
      user_loaction: 'Location here',
      user_comment:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis.',
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Name here',
      user_loaction: 'Location here',
      user_comment:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis.',
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Name here',
      user_loaction: 'Location here',
      user_comment:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis.',
    },
    {
      user_profile: '../assets/slide1.jpg',
      user_name: 'Name here',
      user_loaction: 'Location here',
      user_comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea, at tempore inventore totam similique magnam quam ratione dignissimos, ipsam enim? Voluptate, dicta quibusdam quas debitis repellat ad. Rem, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis amet provident distinctio iure facere, accusamus aut fugit. Natus sapiente porro sint officiis nemo possimus dolore non, commodi nesciunt debitis.',
    },
  ];
  return (
    <div className="testimonial-section">
      <Container>
        <div className="worship-section-header mb-5 text-center">
          <h5 className="home-section-title">Testimonials</h5>
          <h3 className="home-section-desc">
            Discover stories of faith, transformation, and the impact of our
            community through the heartfelt words of our members.
          </h3>
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
                    <p className="text-end  testiminial-icon">
                      <BiSolidQuoteAltRight />
                    </p>
                  </div>

                  <div className="">
                    <div className=" mx-auto overflow-hidden testiminial-profile">
                      <img
                        src={e.user_profile}
                        alt="user-profile"
                        className="rounded-circle"
                      />
                    </div>
                    <h5 className="testiminial-name">{e.user_name}</h5>
                    <p className="testiminial-location">{e.user_loaction}</p>
                  </div>
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
