import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Swipers from "../../components/swiper/Swiper";
import "./ProductDetail.scss";
import "react-quill/dist/quill.core.css";
import CardElementRight from "../../components/cardelementright/CardElementRight";

import ConsultElementRight from "../../components/consultelementright/ConsultElementRight";

const ProductDetail = (props) => {
  console.log("props", props);
  // get list post
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

  // mathcs params id

  console.log(datas);

  const getId = props.match.params.id;
  console.log("ddddd", getId);

  const getData = datas.find((item) => item.id === getId);

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
    <div className="main_form_productdetail">
      <div className="frame_formhtml_element_right">
        <div className="frame_elementhtml">
          <div className="main_detail_productdetail">
            {getData && (
              <div className="frame_get_content_productdetail">
                <h2>{getData.title}</h2>
                <p>{getData.date}</p>
                <hr />
                <div className="element_content">
                  <div id="content" className="element_contents"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="frame_element_right">
          <div className="frame_title">
            <h3>Sản Phẩm khác</h3>
          </div>

         
        <div className="frame_service_item_card_right">
          {datas.slice(1,3).map((item, index) => (
            <div key={index}>
              <CardElementRight
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

          
        

          <ConsultElementRight/>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

