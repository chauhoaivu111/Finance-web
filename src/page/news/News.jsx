import React from "react";
import "./News.scss";

import PostCard from "../../components/postcard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

import Contant from "../../Contant";


const componentDidMount = () => {
  window.scrollTo(0, 0);
};
const News = (props) => {
  componentDidMount();

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "https://tiendungfinance.com.vn/api/posts/",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });
      setDatas(response.data);
      console.log("id", response.data);
    };
    fetchData();
  }, [props]);

  return (
    <div className="main_news">
      <div className="main_news__frame_title_news">
        <h1>Tin Tức</h1>
      </div>

      <div className="line_topic">
        <div className="form_topic">
          <p>Mới nhất</p>
        </div>
        <hr className="line" />
      </div>

      <div className="main_frame_section">
        {datas.slice(0, 4).map((item, index) => {
          return (
            <PostCard
              image={
                "https://tiendungfinance.com.vn/api/data/images/" +
                item.coverPhoto
              }
              title={item.title}
              time={item.date}
              key={index}
              coverPhoto={item.id}
            />
          );
        })}
      </div>

      <div className="line_topic">
        <div className="form_topic">
          <p>tất cả bài viết</p>
        </div>
        <hr className="line" />
      </div>

      <div className="main_frame_section">
      {datas.slice(0, 10).map((item, index) => {
          return (
            <PostCard
              image={
                "https://tiendungfinance.com.vn/api/data/images/" +
                item.coverPhoto
              }
              title={item.title}
              time={item.date}
              key={index}
              coverPhoto={item.id}
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default News;
