import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "./SlideNew.scss";
import axios from "axios";
import { Link } from "react-router-dom";


const SlideNew = (props) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "https://tiendungfinance.com.vn/api/posts?type=news",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });

      const datakey = response.data.news;

      setDatas(() => {
        let allNews = [];
        for (let j in datakey) {
          allNews = allNews.concat(datakey[j]);
        }
        return allNews;
      });
    };
    fetchData();
  }, [props]);

  return (
    <div className="Main_slider_new">
      {/* <h2>Tin mới nhất</h2> */}

      <div className="frame_silder_New_style">
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
          {datas.map((item, index) => (

            <SwiperSlide key={index}>
              <Link to={`/Post/detail/${item.id}`} >
              <div className="frame_slides">
                <div className="frame_img_slide_SliderNew">
                  <img
                    src={
                      "https://tiendungfinance.com.vn/api/data/images/" +
                      item.coverPhoto
                    }
                  />
                </div>

                <div className="frame_content_slidenew">
                    <div className="frame_content_slidenew_children">

                    <h3>{item.title.substring(0,30)+" ..."}</h3>
                    </div>
                 

                  <p>{item.date}</p>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      
    </div>
  );
};

export default SlideNew;
