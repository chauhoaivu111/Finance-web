import React, { useEffect, useState } from "react";
import "./Service.scss";

import CardService from "../../components/cardservice/CardService";
import { CardData1 } from "../../assets/data/Card_data";

import top_banner_service from "../../assets/service/SVG/top_banner_service.svg";
import Element_top_service from "../../components/topelementservice/Element_top_service";
import axios from "axios";
import SlideNew from "../../components/slidernew/SlideNew";
import LoanService from "../loanservice/LoanService";

const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const Service = (props) => {
  componentDidMount();

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "https://tiendungfinance.com.vn/api/posts?type=products",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });

      const datakey = response.data.products;

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
    <div className="main_service">
      <Element_top_service />

      <div className="style_frame_main_card">
        <div className="frame_service_item">
          {datas.map((item, index) => (
            <div key={index}>
              <CardService
                Title={item.title}
                image={
                  "https://tiendungfinance.com.vn/api/data/images/" +
                  item.coverPhoto
                }
                date={item.date}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>


      <div className="background_slide_new">

      <h2>Tin mới nhất</h2>

      <SlideNew/>

      </div>

  

      <LoanService/>
    </div>
  );
};

export default Service;
