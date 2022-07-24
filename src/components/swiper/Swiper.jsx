import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

import React from "react";
import "./Swiper.scss";

import img1 from "../../assets/img-partner/img1.jpg";
import img2 from "../../assets/img-partner/img2.jpg";
import img3 from "../../assets/img-partner/img3.jpg";
import img4 from "../../assets/img-partner/img4.jpg";
import img5 from "../../assets/img-partner/img5.jpg";
import img6 from "../../assets/img-partner/img6.jpg";
import img7 from "../../assets/img-partner/img7.jpg";

const Swipers = () => {
  return (
    <div className="main_slide">
        <h1>Các đối tác của Tien Dung Finance</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={"3"}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img3} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="frame_slide">
            <img src={img4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img6} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img7} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipers;
