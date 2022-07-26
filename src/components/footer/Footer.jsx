import React from "react";
import "./Footer.scss";
import MainLogo from "../../assets/logo/Main_logo.jpg";
import { Link } from "react-router-dom";
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
            <Link
                   to={{
                    pathname:
                      'https://www.facebook.com/admelioravn-102986068104573',
                  }}
                  target="_blank"
                  rel="noreferrer">
              <i class='bx bxl-facebook-circle' style={{color:"#2f12e5"}} ></i>
              </Link>
            </div>
            <div>
              <Link   to={{
                      pathname:
                        'https://www.facebook.com/admelioravn-102986068104573',
                    }}
                  target="_blank"
                  rel="noreferrer" >
              <i class='bx bxl-youtube' style={{color:"#e51231",fontSize:"2.5rem"}} ></i>
              
              </Link>
            </div>
            <div>
              <a   

              
                href='tel: +0326626065' 
                  target="_blank"
                  rel="noreferrer" >
                <i class='bx bxs-phone' style={{color:"#12e544"}}  ></i>
                
                </a>
            </div>
           
          </div>
        </div>
        <div className="contact_action">
          <h4>Sản phẩm thuộc Công Ty TNHH Dịch Vụ Tư Vấn Tiến Dũng</h4>
          <div>
           <p>Mã số thuế: 1101931462 </p>
           <p>Số điện thoại: 0968774597</p>
            <p>
            Trụ sở: Lô 1616, Đường A7B, KDc Tân Đức, Xã Đức Hoà Hạ, Huyện Đức Hoà, Tỉnh Long An, Việt Nam
            </p>
          </div>
          <div>
            <h4 className="time_frame_footer">Giờ làm việc</h4>
            <p>08h - 17h. Thứ 2 - Thứ 7 hằng tuần</p>
          </div>
        </div>
        <div className="service_footer">
          <h4>Các liên kết khác</h4>

          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Điều khoản sử dụng</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="/LoanService">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Chính sách bảo mật</p>{" "}
              </div>
            </Link>
          </div>
          <div className="service_title_frame">
            <Link to="">
              {" "}
              <div className="service_title_frame">
                <i class="bx bx-chevron-right"></i> <p>Phản ánh and góp ý</p>{" "}
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
