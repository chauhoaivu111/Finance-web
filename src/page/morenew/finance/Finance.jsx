import React, { useEffect, useState } from "react";
import axios from "axios";
import Element_top_service from "../../../components/topelementservice/Element_top_service";
import { Link } from "react-router-dom";
import LoanService from "../../loanservice/LoanService";
import CardService from "../../../components/cardservice/CardService";
import "./Finance.scss";
import ThemeMenuNew from "../../../components/thememenunew/ThemMenuNew";
import SlideNew from "../../../components/slidernew/SlideNew";

const FinanceNew = (props) => {
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
      const datakey = response.data.news.finance;

      setDatas(response.data.news.finance);

      // setDatas(() => {
      //   let allNews = [];
      //   for (let j in datakey) {
      //     allNews = allNews.concat(datakey[j]);
      //   }
      //   return allNews;
      // });
    };
    fetchData();
  }, [props]);

  // /----------------------------------------/

  // mathcs params id

  const getData = datas.find((item) => item.id);

  console.log(getData);

  // get titile-id content

  const getContent = [];

  const content = "content";

  for (let list in getData) {
    if (list === content) {
      getContent.push(`${getData[list]}`);
    }
  }

  console.log(getContent);

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
      <div className="main_top_news">
        {datas.slice(0, 1).map((item, index) => (
          <Link to={item.id} key={index}>
            <div className="frame_top_news">
              <div className="frame_title_img_news_finance">
                <h2>Tin tức nỗi bật</h2>
                <div className="frame_img_news_top_finance">
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
        ))}
      </div>

      <div className="style_background_slidenews_new">
        <h2>Tin mới nhất</h2>
        <SlideNew />
      </div>

      <div className="frame_news_themmenu">
        <h1>Tin Tức</h1>

        <ThemeMenuNew />
      </div>

      <div className="style_frame_main_cards">
        <div className="frame_service_items">
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

      {/* <LoanService /> */}
    </div>
  );
};

export default FinanceNew;
