import React from "react";
import "./About.scss";
import Banner_office from "../../assets/About_img/office.jpg";
import BG from "../../assets/About_img/BG.jpg";
import sub from "../../assets/About_img/sub_img_about.jpg";
import sub2 from "../../assets/About_img/sub2_img_about.jpg";
import ThemeMenu from "../../components/thememenu/ThemeMenu";
import about_img1 from '../../assets/About_img/about_img1.jpg'


const componentDidMount = () => {
  window.scrollTo(0, 0)
}



const About = () => {
  componentDidMount();

// /----------------------------------------/ 





  return (
    <div className="main_about">
     
      <div className="main_about__frame_title">
      <ThemeMenu/>
      </div>

      <div className="main_about__banner_office">
        <img src={about_img1} alt='' />
      </div>

   


     

      <div className="First_about">
        <div className="frame_img_about">
          <img src={BG} alt='' />
        </div>
        <div className="content_about">
          <div className="main_content_style">
            <h4>
              Lời nói đầu tiên, Công ty TNHH dịch vụ tư vấn Tiến Dũng (TIEN DUNG
              CS CO.LTD.) xin gửi lời chào và lời chúc thành công đến với Quý
              khách hàng đã yêu thương và gắn bó với TIEN DUNG CS CO., LTD.
            </h4>

            <p>
              TIEN DUNG CS CO., LTD. được thành lập trên tinh thần nhiệt huyết,
              năng động và sáng tạo tuổi trẻ của nhà những nhà sáng lập với mục
              tiêu cung cấp tư vấn và cung cấp các dịch vụ từ các doanh nghiệp
              đáng tin cậy trong nước. Chính vì thế chúng tôi luôn cố gắng và
              phấn đấu hết mình để cung cấp những dịch vụ tốt nhất đến quý khách
              hàng để đền đáp lại tình cảm yêu thương mà khách hàng đã mang đến
              cho chúng tôi. Với đội ngũ gồm những người trẻ đầy nhiệt huyết,
              năng động và được đào tạo và có kinh nghiệm trong lĩnh vực, chúng
              tôi tự tin rằng có thể mang đến một môi trường sáng tạo cho sức
              trẻ, mang đến cho khách hàng sự hài lòng nhất đối với các dịch vụ
              và sản phẩm của công ty.
            </p>
          </div>
        </div>
      </div>
      <div className="Second_about">
        <div className="frame_sub_title">
          <p>
            <span>Tầm nhìn </span> <br />
            <br />
            Trở thành đối tác tin cậy của mọi nhà, mọi cá nhân, mọi thực thể
            trong xã hội.
            <br />
            <br />
            <span>Sứ mạng</span>
            <br />
            <br />
            TIEN DUNG CS CO., LTD. là đơn vị cung cấp các dịch vụ tư vấn và giải
            pháp tài chính hợp lý và hiệu quả cho người tiêu dùng, người lao
            động thu nhập thấp và các cá nhân có nhu cầu bằng các hoạt động môi
            giới, kinh doanh trong việc hợp tác với ngân hàng và tổ chức tín
            dụng, quỹ tín dụng, đồng thời, đưa ra giải pháp tối ưu cho khách
            hàng.
            <br />
            <br />
            TIEN DUNG CS CO., LTD. sẽ trở thành một trong những thương hiệu
            chuỗi đại lý bán lẻ, vé máy bay cùng với việc là đối tác hàng đầu
            của các tập đoàn hay doanh nghiệp. TIEN DUNG CS CO., LTD. sẽ trở
            thành một công ty đa dịch vụ trên mọi lĩnh vực.
          </p>
        </div>
        <div className="img_sub_about">
          <img src={sub} alt='' />
        </div>
      </div>
      <div className="Third_about">
        <div className="img_sub2_about">
          <img src={sub2} alt='' />
        </div>
        <div className="frame_sub2_title">
          <p>
            <span>Mục tiêu – Chiến lược</span> <br/><br/>
            – Hệ thống VPĐD “bao đầu” các khu công nghiệp <br/> <br/>
            – Hệ thống VPĐD tại 63 tỉnh thành trong nước <br/> <br/>
            – Là đối tác của hệ thống ngân hàng và tổ chức tín dụng trong cả nước<br/><br/>
            – Ấp dụng công nghệ 4.0 trong quản lý và làm việc<br/> <br/>
            <span>Thành viên sáng lập</span> <br/><br/>
            – Đặng Hoàng Giang<br/> <br/>
            – Bùi Văn Tiến Dũng<br/> <br/>
            – Phạm Bùi Trọng Hiếu
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
