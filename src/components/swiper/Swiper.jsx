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

import img1 from "../../assets/img-partner/SVG/partnert1.svg";
import img2 from "../../assets/img-partner/SVG/partner2.svg";
import img3 from "../../assets/img-partner/SVG/partner3.svg";
import img4 from "../../assets/img-partner/SVG/partner4.svg";
import img5 from "../../assets/img-partner/SVG/partner5.svg";
import img6 from "../../assets/img-partner/SVG/partner6.svg";
import img7 from "../../assets/img-partner/SVG/partner7.svg";

const Swipers = () => {
  return (

    <div className="style_add">

    <div className="main_slide">
      <h1>Đối Tác Của Chúng Tôi</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={"4"}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide>
          <div className="frame_slide">
            <img src={img1} />{" "}
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

    <div className="frame_banner_consult">
      <div className="main_title_bottom_consult">
      <p>Nhanh Tay Liên Hệ Ngay Hôm Nay Và </p>
      <h1>Nhận Tư Vấn Miễn Phí!</h1>
      </div>

    </div>

    <div className="frame_button_registor_consult">
      <button>Đăng Ký Tư Vấn Ngay!</button>
    </div>

    </div>
  );
};

export default Swipers;
