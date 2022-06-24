import React from "react";
// import { Link } from 'react-router-dom';
import "./LoanService.scss";

import Location from "../../components/location/Location";
const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const LoanService = () => {
  componentDidMount();
  return (
    <div className="main_loan">
      <div className="title_loan">
        <h1>Đăng Kí khoản vay</h1>
      </div>

      <div className="main_element_frame">
        <div className="main_firt_frame_loan">
          <div className="content_loan">
            <h4>ThÔNG TIN CÁ NHÂN</h4>
          </div>
          <div className="frame_phone">
            <p>Số điện thoại *</p>
            <div className="Inputs">
              <input placeholder="Nhập số điện thoại..." />
            </div>
          </div>
          <div className="frame_pass">
            <p>Mật khẩu *</p>
            <div className="Inputs">
              <input placeholder="Nhập mật khẩu..." />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Mật khẩu *</p>
            <div className="Inputs">
              <input placeholder="Nhập mật khẩu..." />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Mật khẩu *</p>
            <div className="Inputs">
              <input placeholder="Nhập mật khẩu..." />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Mật khẩu *</p>
            <div className="Inputs">
              <input placeholder="Nhập mật khẩu..." />
            </div>
          </div>
        </div>
        <div className="main_second_frame_loan">
          <div className="content_loan">
            <h4>CHỌN PHÒNG GIAO DỊCH GẦN BẠN</h4>
          </div>
          <div className="frame_phone">
            <p>Thu nhập mõi tháng *</p>
            <div className="Inputs">
              <input placeholder="Nhập thu nhập mỗi tháng..." />
            </div>
          </div>

          <Location />

          <div className="frame_pass">
            <p>Số nhà *</p>
            <div className="Inputs">
              <input placeholder="Nhập số nhà..." />
            </div>
          </div>
        </div>
      </div>

      <div className="loan_button">
        <button>
          Đăng ký ngay <i class="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default LoanService;
