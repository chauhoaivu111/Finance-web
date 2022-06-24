import React from "react";
import "./Service.scss";


import CardService from "../../components/cardservice/CardService";
import { CardData1 } from "../../assets/data/Card_data";
const componentDidMount = () => {
  window.scrollTo(0, 0)
}

const Service = () => {
  componentDidMount();
  return (
    <div className="main_service">
      <div className="main_service__frame_title_service">
        <h1>Dịch Vụ</h1>
      </div>

      <div className="frame_service_item">
        {CardData1.map((item, index) => (
          <div key={index}>
            <CardService
              Title={item.Title}
              image={item.image}
              Content={item.Content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
