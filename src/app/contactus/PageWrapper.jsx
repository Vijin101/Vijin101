"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TopBackground from "../../Components/TopBackground/TopBackground";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import SectionHeader from "../../Components/Typography/SectionHeader";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(5, "Subject is too short")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});

const PageWrapper = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Here you would typically send the form data to your backend
      console.log(values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 8825850313",
      link: "tel:+918825850313",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "srakinas@gmail.com",
      link: "mailto:srakinas@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: "CEA Church, Attoor, Kanniyakumari, Tamilnadu, 629177",
      link: "https://maps.google.com",
    },
    {
      title: "Follow Us",
      content: (
        <div className="social-icons">
          <a
            href="https://www.facebook.com/groups/182331901823493"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/cea_church_media"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@ceachurchattoor"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/918825850313"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
      ),
      link: "#",
    },
  ];

  return (
    <>
      <TopBackground
        title="CONTACT US"
        desc="Get in Touch with Our Church Community"
      />
      <div className="container contactus-page">
        <Container className="my-5">
          <Row className="mb-5">
            <Col md={12} className="text-center">
              <p>
                Have questions or want to learn more about our church? We'd love
                to hear from you. Fill out the contact form below or reach out
                to us through any of our contact methods.
              </p>
            </Col>
          </Row>

          <Row className="contact-info-section mb-5">
            {contactInfo.map((info, index) => (
              <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                <div className="contact-info-box">
                  <a href={info.link} className="contact-info-link">
                    {info.icon}
                    <h4>{info.title}</h4>
                    {typeof info.content === "string" ? (
                      <p>{info.content}</p>
                    ) : (
                      info.content
                    )}
                  </a>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="contact-form-section">
            <Col md={6} className="mb-4">
              <SectionHeader title="Send us a Message" />
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="contact-form">
                    <div className="form-group mb-3">
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <Field
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Your Message"
                        className="form-control"
                        rows="5"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary accent-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </Form>
                )}
              </Formik>
            </Col>

            <Col md={6} className="mb-4">
              <SectionHeader title="Location" />
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26557.308598790965!2d77.24792218027947!3d8.325882231027062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04544819aafe05%3A0x6930e8c41bdc6045!2sAttoor%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sae!4v1742731393957!5m2!1sen!2sae"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageWrapper;
