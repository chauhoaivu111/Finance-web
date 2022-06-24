import React from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";
import Banner from "../../assets/logo/image_banner.jpg";
import img_title from "../../assets/Home_image/title_image.jpg";
import Sub_banner from "../../assets/Home_image/sub_image.jpg";
import CardData from "../../assets/data/Card_data";
import CardService from "../../components/cardservice/CardService";
import Sub2_image from '.././../assets/Home_image/sub2_image.jpg';
import basicValue from '../../assets/Home_image/basic_value.jpg';
import HV from '../../assets/Home_image/HV.jpg';
const componentDidMount = () => {
  window.scrollTo(0, 0)
}

const Home = () => {
  componentDidMount();
  return (
    <div className="main_home">
      <div className="main_home__banner">
        <div className="intro">
          <div className="frame_title">
            <img src={img_title} alt='' />
          </div>
          <div className="frame_content">
            <p>
              {" "}
              Lời nói đầu tiên, Công ty TNHH dịch vụ tư vấn Tiến Dũng (TIEN DUNG
              CS CO. LTD.) xin gửi lời chào và lời chúc thành công đến với Quý
              khách hàng đã yêu thương và gắn bó với TIEN DUNG CS CO., LTD, được
              thành lập trên tinh thần nhiệt huyết, năng động và sáng tạo tuổi
              trẻ của nhà những nhà sáng lập với mục tiêu cung cấp tư vấn và
              cung cấp các dịch vụ từ các doanh nghiệp đáng tin cậy trong nước.
            </p>
          </div>
        </div>

        <div className="image_banner">
          <img src={Banner}  alt='' />
        </div>
      </div>
      <div className="sub_banner">
        <img src={Sub_banner}  alt='' />
      </div>

      <div className="famous_service">
        <h2>DỊCH VỤ NỔI BẬT</h2>
      </div>

      <div className="frame_CardService_home">
        {CardData.map((item, index) => (
          <div key={index}>
            <CardService
              image={item.image}
              Title={item.Title}
              Content={item.Content}
            />
          </div>
        ))}
      </div>
      <div className="sub2_image">
          <img src ={Sub2_image}  alt=''/>

      </div>

      <div className="Card_user">

        <div className="Card_user__First_card">
          <div className="first_content">
            <div className="avatar">
              <img src={HV}  alt='' />
            </div>
            <div className="content_name">
              <h3>Đặng Hoàng Giang</h3>
              <p>Giám đốc công ty</p>
            </div>

          </div>
          <div className="email_content">
            <p><span className="spans">email:</span> giangdang@gmail.com</p>
          </div>
          <div className="phone_content">
            <p><span>sdt:</span> 0123456789</p>
          </div>

          <div className="frame_button_avatar">
            <button>Liên hệ</button>
          </div>

        </div>
          <div className="Card_user__Second_card">

          <div className="first_content">
              <div className="avatar">
                <img src={HV}  alt='' />
              </div>
              <div className="content_name">
                <h3>Đặng Hoàng Giang</h3>
                <p>Giám đốc công ty</p>
              </div>

            </div>
            <div className="email_content">
              <p><span className="spans">email:</span> giangdang@gmail.com</p>
            </div>
            <div className="phone_content">
              <p><span>sdt:</span> 0123456789</p>
            </div>

            <div className="frame_button_avatar">
              <button>Liên hệ</button>
            </div>


          </div>
          <div className="Card_user__Third_card">
          <div className="first_content">
              <div className="avatar">
                <img src={HV}  alt='' />
              </div>
              <div className="content_name">
                <h3>Đặng Hoàng Giang</h3>
                <p>Giám đốc công ty</p>
              </div>

            </div>
            <div className="email_content">
              <p><span className="spans">email:</span> giangdang@gmail.com</p>
            </div>
            <div className="phone_content">
              <p><span>sdt:</span> 0123456789</p>
            </div>

            <div className="frame_button_avatar">
              <button>Liên hệ</button>
            </div>


          </div>
      </div>

      <div className="BasicValue">
        <img src={basicValue}  alt='' />

      </div>
    </div>
  );
};

export default Home;
