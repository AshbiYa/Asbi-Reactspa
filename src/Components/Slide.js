import React from "react";
import { Carousel } from "react-bootstrap"; // Destructuring import
import Img1 from "../assets/Ee.jpg";
import Img2 from "../assets/Bb.jpg";
import Img3 from "../assets/Dd.jpg";

import "../Components/Slide.css";

function Slide() {
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid rounded img_1"
            src={Img1}
            alt="FirstSlide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid rounded img_2"
            src={Img2}
            alt="SecondSlide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid rounded img_3"
            src={Img3}
            alt="ThirdSlide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slide;
