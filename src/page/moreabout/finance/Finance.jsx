import React, { useEffect, useState } from "react";
import Element_top_service from "../../../components/topelementservice/Element_top_service";
import LoanService from "../../loanservice/LoanService";
// import ThemeMenu from '../../../components/thememenu/ThemeMenu';
import CardService from "../../../components/cardservice/CardService";
import axios from "axios";
import "./Finance.scss";

const Fimance = (props) => {
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

      setDatas(response.data.products.finance);
    };
    fetchData();
  }, [props]);

  console.log(datas);

  return (
    <div className = "Main_style_serviceTop_element">
      <Element_top_service />

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

      <LoanService />
    </div>
  );
};

export default Fimance;
