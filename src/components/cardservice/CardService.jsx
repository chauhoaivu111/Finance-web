import React from "react";
import "./CardService.scss";
import { Link } from "react-router-dom";

const CardService = (props) => {
  return (
    <div className="main_card">
      <div className="first_element">
        <div className="icons">
          <img src={props.image} />
        </div>
        <div className="frame_content">
          <h3>{props.Title}</h3>
          <p>{props.Content}</p>
        </div>
      </div>

      <div className="more_contact">
        <Link to=''>
        <p>
          {" "}
          <i class="bx bx-right-arrow-alt"></i>Thông tin chi tiết{" "}
        </p>
        </Link>
        
      </div>
      <div className="button_card">
        <Link to=''> <button>Tư vấn ngay</button></Link>
        
      </div>
    </div>
  );
};

export default CardService;
