import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend"><Link to={"/appointment"}>Book Appointment</Link></p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend"><Link to={"/call"}>Call Support</Link></p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
