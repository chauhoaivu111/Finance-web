import React from "react";
import "./Footer.scss";
import MainLogo from "../../assets/logo/Main_logo.jpg";
import { Link } from "react-router-dom";
import Zalo from "../../assets/logo/zalo_img.jpg";
import Facebook from "../../assets/logo/facebook_img.jpg";
const Footer = () => {
  return (
    <div className="main_footer">
      <hr />
      <div className="content_footer">
        <div className="content_footer__logo_contact_icon">
          <div className="logo_footer">
            <img src={MainLogo} alt='' />
          </div>
          <div className="contact_icon">
            <div>
              <Link to="">
                <img src={Zalo}  alt='' />
              </Link>
            </div>
            <div>
              <Link to="">
                <img src={Facebook}  alt='' />
              </Link>
            </div>
          </div>
        </div>
        <div className="contact_action">
          <h2>Liên Hệ</h2>
          <div>
            <h3>Địa Chỉ</h3>
            <p>
              Văn phòng làm việc Lô 1616, Đường A7B, KDC Tân Đức, Ấp Bình Tiền
              2, Đức Hòa Hạ, Đức Hòa, Long An Giờ làm việc: 08h - 17h. Thứ 2 -
              Thứ 7 hằng tuần Số điện thoại: 0963 520 10
            </p>
          </div>
          <div>
            <h3>Giờ làm việc</h3>
            <p>08h - 17h. Thứ 2 - Thứ 7 hằng tuần Số điện thoại: 0963 520 10</p>
          </div>
        </div>
        <div className="service_footer">
          <h2>Dịch vụ</h2>

          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Vé máy bay, vé tàu</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="/LoanService">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Vay tiêu dùng</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Hàng tiêu dùng</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Bất động sản</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Bảo hiểm nhân thọ</p>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="Hr_bottom">
        <hr />
      </div>

      <div className="copyright">
        <p>Copyright © 2019 CÔNG TY TNHH DỊCH VỤ TƯ VẤN TIẾN DŨNG</p>
      </div>
    </div>
  );
};

export default Footer;
