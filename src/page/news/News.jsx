import React from "react";
import "./News.scss";

import PostCard from "../../components/postcard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Contant from "../../Contant";
import CardService from "../../components/cardservice/CardService";

// import MenuAbout_data from "../../assets/MenuAbout";
import MenuAbout from "../../components/menu_about/MenuAbout";
import SlideNew from "../../components/slidernew/SlideNew";

import ThemeMenuNew from "../../components/thememenunew/ThemMenuNew";
import CardServiceNew from "../../components/cardservicenew/CardServiceNew";

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

  // /----------------------------------------/

  // mathcs params id

  // const getId = props.match.params.id;
  // console.log("ddddd", getId);

  const getData = datas.find((item) => item.id);

  // get titile-id content

  const getContent = [];

  const content = "content";

  for (let list in getData) {
    if (list === content) {
      getContent.push(`${getData[list]}`);
    }
  }

  // get post detail

  function load_home(e) {
    (e || window.event).preventDefault();

    fetch("https://tiendungfinance.com.vn/api/data/contents/" + getContent)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content").innerHTML = html;
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  load_home();

  return (
    <div>
      <div className="main_news">
        <div>
          
          {datas.slice(0, 1).map((item, index) => (
           
            <div key={index}>
              <Link  to={`/Post/detail/${item.id}`}>
                <div className="frame_top_news">
                  <div className="frame_title_img_news">
                    <h2>Tin tức nỗi bật</h2>
                    <div className="frame_img_news_top">
                      <img
                        src={
                          "https://tiendungfinance.com.vn/api/data/images/" +
                          item.coverPhoto
                        }
                      />
                    </div>
                  </div>

                  <div className="frame_title_contents_news">
                    <p>{item.date}</p>
                    <h1>{item.title}</h1>
                    <div className="element_contentss">
                      <div id="content" className="element_contentss"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
          ))}
        </div>
      </div>

      <div className="style_background_slidenews_new">
        <h2>Tin mới nhất</h2>
        <SlideNew />
      </div>

      <div className="frame_news_themmenu">
        <h1>Tin Tức</h1>

        <ThemeMenuNew />
      </div>

      <div className="style_frame_main_card_newss">
        <div className="frame_service_item_new">
          {datas.map((item, index) => (
            <div key={index}>
              <CardServiceNew
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
    </div>
  );
};

export default News;
