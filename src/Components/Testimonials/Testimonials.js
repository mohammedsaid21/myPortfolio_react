import React from "react";
import Img1 from "../../assets/person.png";
import "./style.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={Img1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Eng.Khaled Shbair</h5>
          <small className="client_review">
            You are a hardworking and committed person. I wish you success always
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={Img1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Anas Ali</h5>
          <small className="client_review">
            This is a hardworking, energetic person with a strong brain that I
            have had the pleasure of working with
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={Img1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Omaran Mohammed</h5>
          <small className="client_review">
            Thank you for all the information you gave me, you made the road
            easier for me and made it easy for me
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
