"use client";

import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const AboutImageRow = ({ images }) => {
  return (
    <div className="aboute-images-row">
      <Row sm={2}>
        {images &&
          images.length > 0 &&
          images.map((img, id) => (
            <img className="image" key={id} src={img} loading="lazy" />
          ))}
      </Row>
    </div>
  );
};

export default AboutImageRow;
