import React from "react";
import "./Consult.scss";
// import { Link } from "react-router-dom";

const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const Consult = () => {
  componentDidMount();
  return (
    <div className="main_consult">
      <div className="title_consult">
        <h1>Đăng Kí Tư Vấn</h1>
      </div>
      <div className="content_consult">
        <h4>ThÔNG TIN CÁ NHÂN</h4>
      </div>
      <div className="frame_phone">
        <p>Họ và tên *</p>
        <div className="Inputs">
          <input placeholder="Nhập Họ và tên..." />
        </div>
      </div>

      <div className="frame_pass">
        <p>Số điện thoại *</p>
        <div className="Inputs">
          <input placeholder="Nhập số điện thoại..." />
        </div>
      </div>

      <div className="frame_pass">
        <p>Email *</p>
        <div className="Inputs">
          <input placeholder="Nhập Email..." />
        </div>
      </div>

      <div className="consult_button">
        <button>
          Đăng ký ngay <i class="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Consult;
