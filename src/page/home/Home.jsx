import React from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";
// import Banner from "../../assets/logo/image_banner.jpg";
import Banner from "../../assets/Home_image/SVG/home.svg";
import Banner1 from "../../assets/Home_image/mobile/banner1.jpg";
import Banner2 from '../../assets/Home_image/mobile/banner2.jpg'
import Sub_banner11_resize from '../../assets/Home_image/mobile/subbanner11_resize.jpg';
import Sub_banner2_resize from '../../assets/Home_image/mobile/subbanner2_resize.jpg';
import sub_img1_resize from '../../assets/Home_image/mobile/sub_imge1_resize.jpg';
import sub_img2_resize from '../../assets/Home_image/mobile/sub_imge2_resize.jpg';
import Sub_banner from "../../assets/Home_image/SVG/home2.svg";
import CardData from "../../assets/data/Card_data";
import CardService from "../../components/cardservice/CardService";
import Sub2_image from "../../assets/Home_image/SVG/home3.svg";
import basicValue from "../../assets/Home_image/basic_value.jpg";
import HV from "../../assets/Home_image/HV.jpg";
import HVs from "../../assets/Home_image/HVs.jpg"
import Swipers from "../../components/swiper/Swiper";

import LoanService from "../loanservice/LoanService";
const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const Home = () => {
  componentDidMount();
  return (
    <div>
      <LoanService />

      <div className="image_bannerss">
        <img src={Banner} alt="" />
      </div>

      <div className="image_banner_mobile">
        <img src={Banner1} alt="" />
        <img src={Banner2} alt="" />
      </div>
      <div className="img_sub_banner_resize">
        <img src={Sub_banner} className='none_resizes'  alt =''/>
        
        <div>
          <h3>
            CHÀO MỪNG BẠN ĐẾN VỚI CÔNG TY TNHH DỊCH VỤ TƯ VẤN TIẾN DŨNG
          </h3>
        </div>
        <img src={Sub_banner11_resize} className='resizes' alt =''/>
        <img src={Sub_banner2_resize} className='resizes' alt =''/>

        
      </div>




      <div className="main_home">
       
       
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
          <img src={Sub2_image} alt="" />

        </div>

        <div className="sub2_imagess">
          <h3>5 Tiêu Chí Nên Lựa Chọn TIEN DUNG FINANCE</h3>
          <img src = {sub_img1_resize} alt =''/>
          <img src = {sub_img2_resize} alt =''/>
        </div>

        <div className="Card_user">
          <div className="Card_user__First_card">
            <div className="first_content">
              <div className="avatar">
                <img src={HVs} alt="" />
              </div>
              <div className="content_name">
                <h3>Trần Triệu Vỹ</h3>
                <p>Sales Support Department</p>
              </div>
            </div>
            <div className="email_content">
              <p>
                <span className="spans">email:</span> giangdang@gmail.com
              </p>
            </div>
            <div className="phone_content">
              <p>
                <span>sdt:</span> 0123456789
              </p>
            </div>

            <div className="frame_button_avatar">
              <button>Liên hệ</button>
            </div>
          </div>
          <div className="Card_user__Second_card">
            <div className="first_content">
              <div className="avatar">
                <img src={HV} alt="" />
              </div>
              <div className="content_name">
                <h3>BÙI VĂN TIẾN DŨNG</h3>
                <p>Giám đốc công ty</p>
              </div>
            </div>
            <div className="email_content">
              <p>
                <span className="spans">email:</span> giangdang@gmail.com
              </p>
            </div>
            <div className="phone_content">
              <p>
                <span>sdt:</span> 0123456789
              </p>
            </div>

            <div className="frame_button_avatar">
              <button>Liên hệ</button>
            </div>
          </div>
          <div className="Card_user__Third_card">
            <div className="first_content">
              <div className="avatar">
                <img src={HVs} alt="" />
              </div>
              <div className="content_name">
                <h3>Trịnh Nhựt Hảo</h3>
                <p>Sales Support Department</p>
              </div>
            </div>
            <div className="email_content">
              <p>
                <span className="spans">email:</span> giangdang@gmail.com
              </p>
            </div>
            <div className="phone_content">
              <p>
                <span>sdt:</span> 0123456789
              </p>
            </div>

            <div className="frame_button_avatar">
              <button>Liên hệ</button>
            </div>
          </div>
        </div>
        <div>
          <Swipers />
        </div>

        <div className="BasicValue">
          <img src={basicValue} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;












// import React from "react";
// // import { Link } from "react-router-dom";
// import "./Home.scss";
// // import Banner from "../../assets/logo/image_banner.jpg";
// import Banner from "../../assets/Home_image/SVG/home.svg";
// import Banner1 from "../../assets/Home_image/mobile/banner1.jpg";
// import Banner2 from '../../assets/Home_image/mobile/banner2.jpg'
// import img_title from "../../assets/Home_image/title_image.jpg";
// import Sub_banner from "../../assets/Home_image/SVG/home2.svg";
// import CardData from "../../assets/data/Card_data";
// import CardService from "../../components/cardservice/CardService";
// import Sub2_image from "../../assets/Home_image/SVG/home3.svg";
// import basicValue from "../../assets/Home_image/basic_value.jpg";
// import HV from "../../assets/Home_image/HV.jpg";
// import Swipers from "../../components/swiper/Swiper";

// import LoanService from "../loanservice/LoanService";
// const componentDidMount = () => {
//   window.scrollTo(0, 0);
// };

// const Home = () => {
//   componentDidMount();
//   return (
//     <div>
//       <LoanService />

//       <div className="image_bannerss">
//         <img src={Banner} alt="" />
//       </div>


//       <div className="main_home">
//         <div className="main_home__banner">
//           <div className="intro">
//             <div className="frame_title">
//               <img src={Banner1} alt="" />
//             </div>
//             {/* <div className="frame_content">
//               <p>
//                 {" "}
//                 Lời nói đầu tiên, Công ty TNHH dịch vụ tư vấn Tiến Dũng (TIEN
//                 DUNG CS CO. LTD.) xin gửi lời chào và lời chúc thành công đến
//                 với Quý khách hàng đã yêu thương và gắn bó với TIEN DUNG CS CO.,
//                 LTD, được thành lập trên tinh thần nhiệt huyết, năng động và
//                 sáng tạo tuổi trẻ của nhà những nhà sáng lập với mục tiêu cung
//                 cấp tư vấn và cung cấp các dịch vụ từ các doanh nghiệp đáng tin
//                 cậy trong nước.
//               </p>
//             </div> */}
//           </div>

//           <div className="image_banner">
//             <img src={Banner2} alt="" />
//           </div>
//         </div>
//         {/* <div className="sub_banner">
//           <img src={Banner2} alt="" />
//         </div> */}

//         <div className="famous_service">
//           <h2>DỊCH VỤ NỔI BẬT</h2>
//         </div>

//         <div className="frame_CardService_home">
//           {CardData.map((item, index) => (
//             <div key={index}>
//               <CardService
//                 image={item.image}
//                 Title={item.Title}
//                 Content={item.Content}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="sub2_image">
//           <img src={Sub2_image} alt="" />
//         </div>

//         <div className="Card_user">
//           <div className="Card_user__First_card">
//             <div className="first_content">
//               <div className="avatar">
//                 <img src={HV} alt="" />
//               </div>
//               <div className="content_name">
//                 <h3>Đặng Hoàng Giang</h3>
//                 <p>Giám đốc công ty</p>
//               </div>
//             </div>
//             <div className="email_content">
//               <p>
//                 <span className="spans">email:</span> giangdang@gmail.com
//               </p>
//             </div>
//             <div className="phone_content">
//               <p>
//                 <span>sdt:</span> 0123456789
//               </p>
//             </div>

//             <div className="frame_button_avatar">
//               <button>Liên hệ</button>
//             </div>
//           </div>
//           <div className="Card_user__Second_card">
//             <div className="first_content">
//               <div className="avatar">
//                 <img src={HV} alt="" />
//               </div>
//               <div className="content_name">
//                 <h3>Đặng Hoàng Giang</h3>
//                 <p>Giám đốc công ty</p>
//               </div>
//             </div>
//             <div className="email_content">
//               <p>
//                 <span className="spans">email:</span> giangdang@gmail.com
//               </p>
//             </div>
//             <div className="phone_content">
//               <p>
//                 <span>sdt:</span> 0123456789
//               </p>
//             </div>

//             <div className="frame_button_avatar">
//               <button>Liên hệ</button>
//             </div>
//           </div>
//           <div className="Card_user__Third_card">
//             <div className="first_content">
//               <div className="avatar">
//                 <img src={HV} alt="" />
//               </div>
//               <div className="content_name">
//                 <h3>Đặng Hoàng Giang</h3>
//                 <p>Giám đốc công ty</p>
//               </div>
//             </div>
//             <div className="email_content">
//               <p>
//                 <span className="spans">email:</span> giangdang@gmail.com
//               </p>
//             </div>
//             <div className="phone_content">
//               <p>
//                 <span>sdt:</span> 0123456789
//               </p>
//             </div>

//             <div className="frame_button_avatar">
//               <button>Liên hệ</button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Swipers />
//         </div>

//         <div className="BasicValue">
//           <img src={basicValue} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
