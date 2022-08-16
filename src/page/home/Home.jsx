import React from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";


import subBG1 from "../../assets/Home_image/SVG/subBG1.svg";
import subBG2 from "../../assets/Home_image/SVG/subBG2.svg";
import icoDD from "../../assets/Home_image/SVG/icoDD.svg";
import icoMB from "../../assets/Home_image/SVG/icoMB.svg";
import icoST from "../../assets/Home_image/SVG/icoST.svg";
import iconTT from "../../assets/Home_image/SVG/icoTT.svg";
import sub_about1 from "../../assets/Home_image/SVG/sub_about1.svg";
import new_about_value from "../../assets/About_img/SVG/new.svg";
import heart_about_value from "../../assets/About_img/SVG/heart.svg";
import corporate_about_value from "../../assets/About_img/SVG/corporate.svg";
import sublogo from "../../assets/About_img/SVG/subLogo.svg";
import subFiveObject from "../../assets/Home_image/SVG/subfiveObject.svg";
import object1 from "../../assets/all_icon/folders.png";
import object2 from "../../assets/all_icon/interest-rate.png";
import object3 from "../../assets/all_icon/report.png";
import object4 from "../../assets/all_icon/diversify.png";
import object5 from "../../assets/all_icon/startup.png";
import value1 from "../../assets/all_icon/professionals.png";
import value2 from "../../assets/all_icon/trust.png";
import value3 from "../../assets/all_icon/clock.png";
import value4 from "../../assets/all_icon/responsibility.png";
import sub_mission_version from "../../assets/Home_image/SVG/sub_about_bottom.svg";
// import CardData from "../../assets/data/Card_data";
import CardService from "../../components/cardservice/CardService";
import Swipers from "../../components/swiper/Swiper";
import LoanService from "../loanservice/LoanService";
import SlideNew from "../../components/slidernew/SlideNew";
import { useEffect, useState } from "react";
import axios from "axios";

const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const Home = (props) => {





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
  componentDidMount();



  
  return (
    <div>
      <div className="image_bannerss">
        <div className="main_frame_banner" data-aos="fade-up">
          <div className=" style_img_content">
            <div className="top_img_content">
              <img src={subBG1} alt="" />
            </div>
            <div className="frame_tontent">
              <p>
                Lời nói đầu tiên, Công ty TNHH dịch vụ tư vấn Tiến Dũng (TIEN
                DUNG CS CO. LTD.) xin gửi lời chào và lời chúc thành công đến
                với Quý khách hàng đã yêu thương và gắn bó với TIEN DUNG CS CO.,
                LTD, được thành lập trên tinh thần nhiệt huyết, năng động và
                sáng tạo tuổi trẻ của nhà những nhà sáng lập với mục tiêu cung
                cấp tư vấn và cung cấp các dịch vụ từ các doanh nghiệp đáng tin
                cậy trong nước.
              </p>
            </div>
          </div>

          <div className="frame_sub_img2">
            <img src={subBG2} alt="" />
          </div>
        </div>
      </div>

      <div className="first_about" data-aos="fade-up">
        <div className="frame_Second_title_home" data-aos="fade-up">
          <h2>CHÀO MỪNG BẠN ĐẾN VỚI </h2>
          <h2>CÔNG TY TNHH DỊCH VỤ TƯ VẤN TIẾN DŨNG</h2>
        </div>

        <div className="main_children_components">
          <div className="first_element_about">
            <div className="contents_about" data-aos="fade-up">
              <h2>Về Tiến Dũng Finane</h2>
              <ul>
                <li>
                  Tiến Dũng Được thành lập vào ngày 22-10-2019, là đơn vị cung
                  cấp dịch vụ và giới thiệu khách hàng cho các tổ chức Tài Chính
                  - Ngân Hàng, Hãng Hàng Không, Nhà Xe, ...
                </li>
                <li>
                  Quan tâm và mục tiêu hàng đầu của chúng tôi là đầu tư vào tạo
                  đội ngũ nhân viên, tạo dựng môi trường làm việc năng động,
                  chuyên nghiệp và đạt hiệu quả cao, đảm bao cho sự phát triển
                  lâu dài và và bền vững.
                </li>
                <li>
                  Với đội ngũ nhân viên trải dài trên khắp cả nước, Tiến Dũng
                  luôn nỗ lực cố gắng phát triển để xây dựng Công ty ngày càng
                  lớn mạnh hơn.
                </li>
              </ul>
            </div>
            <div className="sub_banner_about" data-aos="fade-up">
              <img src={sub_about1} />
            </div>
          </div>
          <div>
            <div className="frame_title_value" data-aos="fade-up">
              <h2>Giá Trị Cốt Lõi</h2>
            </div>

            <div className="content_sub_value" data-aos="fade-up">
              <div className="value_content_img">
                <div>
                  <img src={new_about_value} alt="" />
                </div>
                <div className="content_value_style">
                  <p>
                    <span>Tân: </span>Luôn đổi mới, sáng tạo để đem lại hiệu quả
                    tốt nhất
                  </p>
                </div>
              </div>
              <div className="value_content_img">
                <div>
                  <img src={heart_about_value} alt="" />
                </div>
                <div className="content_value_style">
                  <p>
                    <span>Tâm: </span>Tôn trọng khách hàng và luôn đem khách
                    hàng lên hàng đầu trong mọi sự hợp tác.
                  </p>
                </div>
              </div>
              <div className="value_content_img">
                <div>
                  <img src={corporate_about_value} alt="" />
                </div>
                <div className="content_value_style">
                  <p>
                    <span>Tín: </span>Cam kết làm việc nhanh chóng, minh bach và
                    là điểm đến đáng tin cậy của mọi nhà.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_about" data-aos="fade-up">
        <div className="top_element_img_content">
          <div className="frame_img_sub_second_about">
            <img src={sublogo} alt="" />
          </div>
          <div className="frame_content_sub_second_about">
            <p>
              Lời nói đầu tiên, Công Ty TNHH Dịch Vụ Tư Vấn Tiến Dũng (TIEN DUNG
              FINANCE) xin gửi lời chào và lời chúc thành công đến với Quý khách
              hàng đã yêu thương và gắn bó với TIEN DUNG FINANCE.
            </p>
          </div>
        </div>
        <div className="seocond_element_img_content">
          <p>
            <span>TIEN DUNG FINANCE</span> được thành lập trên tinh thần nhiệt
            huyết, năng động và sáng tạo tuổi trẻ của nhà những nhà sáng lập với
            mục tiêu cung cấp tư vấn và cung cấp các dịch vụ từ các doanh nghiệp
            đáng tin cậy trong nước. Chính vì thế chúng tôi luôn cố gắng và phấn
            đấu hết mình để cung cấp những dịch vụ tốt nhất đến quý khách hàng
            để đền đáp lại tình cảm yêu thương mà khách hàng đã mang đến cho
            chúng tôi.
          </p>
          <p>
            Với đội ngũ gồm những người trẻ đầy nhiệt huyết, năng động và được
            đào tạo và có kinh nghiệm trong lĩnh vực, chúng tôi tự tin rằng có
            thể mang đến một môi trường sáng tạo cho sức trẻ, mang đến cho khách
            hàng sự hài lòng nhất đối với các dịch vụ và sản phẩm của công ty.
          </p>
        </div>
      </div>

      <div className="fiveObject_home" data-aos="fade-up">
        <h2>5 Tiêu Chí Nên Lựa Chọn TIEN DUNG FINANCE</h2>

        <div className="frame_ing_contentIcon_fiveObject">
          <div className="frame_img_object">
            <img src={subFiveObject} alt="" />
          </div>

          <div className="frame_content_object">
            <div className="element_content_object">
              <img src={object1} alt="" />
              <p>Hồ sơ đơn giản</p>
            </div>
            <div className="element_content_object">
              <img src={object2} alt="" />
              <p>Lãi suất thấp</p>
            </div>
            <div className="element_content_object">
              <img src={object3} alt="" />
              <p>Hạn mức vay lên đến 300 triệu đồng</p>
            </div>
            <div className="element_content_object">
              <img src={object4} alt="" />
              <p>Đa dạng sản phẩm vay</p>
            </div>
            <div className="element_content_object">
              <img src={object5} alt="" />
              <p>Giải ngân nhanh chóng</p>
            </div>
          </div>
        </div>
      </div>

      <LoanService />

      <div className="valueCompany" data-aos="fade-up">
        <h2>CHÚNG TÔI LÀ GIẢI PHÁP RẤT ĐÁNG TIN CẬY</h2>

        <div className="main_frame_content_valueCP">
          <div className="children_element_value_CP">
            <img src={value1} alt="" />
            <p>Chuyên nghiệp</p>
          </div>
          <div className="children_element_value_CP">
            <img src={value2} alt="" />
            <p>Tin tưởng</p>
          </div>
          <div className="children_element_value_CP">
            <img src={value3} alt="" />
            <p>Nhanh chống</p>
          </div>
          <div className="children_element_value_CP">
            <img src={value4} alt="" />
            <p>Tận tâm</p>
          </div>
        </div>
      </div>

      <div className="second_banner_home">
        <div className="frame_content_second_banner" data-aos="fade-up">
          <div className="frame_blue_color">
            <div className="main_blue_element">
              <div className="frame_content_icon">
                <div className="icon_title">
                  <img src={icoMB} alt="" />
                  <h3>Minh Bạch</h3>
                </div>
                <div className="content">
                  <p>
                    Minh bạch tài chính rõ ràng tài chính giúp khách hàng thêm
                    tin cậy TIEN DUNG CS CO., LTD. hơn.
                  </p>
                </div>
              </div>
              <div className="frame_content_icon">
                <div className="icon_title">
                  <img src={icoDD} alt="" />
                  <h3>Minh Bạch</h3>
                </div>
                <div className="content">
                  <p>
                    Biết được ví tiền của khách hàng quan trọng nên chúng tôi
                    luôn cố gắng làm kiếm được nhiều tiền nhất cho khách hàng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="frame_white_color">
            <div className="main_white_element">
              <div className="frame_content_icons">
                <div className="icon_title">
                  <img src={icoST} alt="" />
                  <h3>Xác Thực</h3>
                </div>
                <div className="content">
                  <p>
                    Mọi vấn đề tài chính đều được xác thực nhiều lần để đảm bảo
                    vấn đề bảo mật cho khách hàng
                  </p>
                </div>
              </div>
              <div className="frame_content_iconss">
                <div className="icon_title">
                  <img src={iconTT} alt="" />
                  <h3>Tôn Trọng</h3>
                </div>
                <div className="content">
                  <p>
                    Mỗi con người làm việc tai TIEN DUNG CS CO., LTD. đều là
                    những đứa con của chúng tôi. Chúng tôi luôn chú trong bồi
                    dưỡng nhân viên
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="style_banner_second_sub"></div>
        </div>
      </div>

      <div className="main_home">
        <div className="frame_CardService_home" data-aos="fade-up">
          <div>
            <h1>DỊCH VỤ NỔI BẬT</h1>
          </div>
          <div className="style_frame_main_card_home">
            
        <div className="frame_service_item_homess">
          {datas.slice(0,6).map((item, index) => (
            // <div >
              <CardService key={index}
                Title={item.title}
                image={
                  "https://tiendungfinance.com.vn/api/data/images/" +
                  item.coverPhoto
                }
                date={item.date}
                id={item.id}
              />
            // </div>
          ))}
        </div>
      </div>
        </div>

        <div
          className="main_frame_sub_about_version_mission"
          data-aos="fade-up"
        >
          <div className="frame_content_img_mission_version">
            <div>
              <img src={sub_mission_version} alt="" />
            </div>

            <div className="frame_content_mission_version">
              <div className="frist_frame_content_about">
                <h3>Tầm nhìn</h3>
                <p>
                  Trở thành đối tác tin cậy của mọi nhà, mọi cá nhân, mọi thực
                  thể trong xã hội.
                </p>
                <h3>Sứ mạng</h3>
                <p>
                  TIENDUNGFINANCE. là đơn vị cung cấp các dịch vụ tư vấn và giải
                  pháp tài chính hợp lý và hiệu quả cho người tiêu dùng, người
                  lao động thu nhập thấp và các cá nhân có nhu cầu bằng các hoạt
                  động môi giới, kinh doanh trong việc hợp tác với ngân hàng và
                  tổ chức tín dụng, quỹ tín dụng, đồng thời, đưa ra giải pháp
                  tối ưu cho khách hàng.
                </p>

                <p>
                  TIENDUNGFINANCE. sẽ trở thành một trong những thương hiệu
                  chuỗi đại lý bán lẻ, vé máy bay cùng với việc là đối tác hàng
                  đầu của các tập đoàn hay doanh nghiệp. TIENDUNGFINANCE. sẽ trở
                  thành một công ty đa dịch vụ trên mọi lĩnh vực.
                </p>
              </div>

              <div className="second_frame_content_about">
                <h3>Mục tiêu – Chiến lược</h3>

                <p>– Hệ thống VPĐD “bao đầu” các khu công nghiệp </p>

                <p>– Hệ thống VPĐD tại 63 tỉnh thành trong nước vào năm 2025</p>

                <p>
                  – Là đối tác của hệ thống ngân hàng và tổ chức tín dụng trong
                  cả nước
                </p>

                <p>– Áp dụng công nghệ 4.0 trong quản lý và làm việc</p>

                <p>– Giải ngân trên 100 tỷ mỗi tháng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="background_slide_new" data-aos="fade-up">
          <h2>Tin mới nhất</h2>

          <SlideNew />
        </div>

        <div data-aos="fade-up">
          <Swipers />
        </div>
      </div>
    </div>
  );
};

export default Home;
