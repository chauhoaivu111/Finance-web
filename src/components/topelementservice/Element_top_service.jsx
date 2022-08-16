import React from "react";

import "./Element_top_service.scss";
import top_banner_service from "../../assets/service/SVG/top_banner_service.svg";
import ThemeMenu from "../thememenu/ThemeMenu";

const Element_top_service = () => {
  return (
    <div>
      <div className="frame_banner_service">
        <div className="frame_content_banner_service">
          <h1>Bạn Cần Tiền ?</h1>
          <h2>Đã có Tien Dung Finance !</h2>
          <h3>Dịch vụ tài chính tốt nhất trong tầm tay bạn</h3>

          <div className="frame_button_banner_service">
            <button>Đăng ký ngay!</button>
          </div>
        </div>

        <div className="frame_img_banner_service">
          <img src={top_banner_service} alt="" />
        </div>
      </div>

      <div className="frame_title_service">
        <h1>Dịch vụ của chúng tôi</h1>
        <h3>Tien Dung Finance cung cấp đa dạng các loại hình dịch vụ </h3>
      </div>

      <div>
        <ThemeMenu/>
        </div>

        


    </div>
  );
};

export default Element_top_service;
