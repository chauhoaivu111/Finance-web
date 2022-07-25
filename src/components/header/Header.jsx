import React, { useRef } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../assets/logo/Main_logo.jpg";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const ClickActiveRef = (content_Ref, toggle_Ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_Ref.current && toggle_Ref.current.contains(e.target)) {
      content_Ref.current.classList.toggle("active_drawer");
    }
    // user click outside toggle
    else {
      if (content_Ref.current && !content_Ref.current.contains(e.target)) {
        content_Ref.current.classList.remove("active_drawer");
      }
    }
  });
};

const Header = () => {
  //  contextUser -----------------------------------------

  const { valueUser,setValueUser } = useContext(UserContext);

  // -----------------------------------------------------------
  const HeaderRef = [
    {
      title: "Trang Chủ",
      Route: "/",
    },
    {
      title: "Giới Thiệu",
      Route: "/About",
    },
    {
      title: "Tin Tức",
      Route: "/News",
    },
    {
      title: "Dịch Vụ",
      Route: "/Service",
    },
    {
      title: "Liên Hệ",
      Route: "/Consult",
    },
  ];



  const HeaderRefmobile = [
    {
      title: "Trang Chủ",
      Route: "/",
    },
    {
      title: "Giới Thiệu",
      Route: "/About",
    },
    {
      title: "Tin Tức",
      Route: "/News",
    },
    {
      title: "Dịch Vụ",
      Route: "/Service",
    },
    {
      title: "Liên Hệ",
      Route: "/Consult",
    },
  ];

  const { pathname } = useLocation();
  const { pathnamemobile } = useLocation();

  const active = HeaderRef.findIndex((item) => item.Route === pathname);

  // const activemobile = HeaderRef.findIndex((item) => item.Route === pathnamemobile);

  // ----------------------------------------------

  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  ClickActiveRef(menu_ref, menu_toggle_ref);

  const setActiveClick = () => menu_ref.current.classList.add("active_drawer");
  const setCloseClick = () =>
    menu_ref.current.classList.remove("active_drawer");

  // ---------------------------------------------

  return (
    <div className="main_header">
      <div className="main_header__drawer_moblie" ref={menu_toggle_ref}>
        <i class="bx bx-menu" onClick={() => setActiveClick}></i>
      </div>
      <div className="main_header__main_drawer" ref={menu_ref}>
        <div className="button_close">
          <button ref={menu_ref} onClick={() => setCloseClick()} className>
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className="content_moblie">
          {HeaderRefmobile.map((item, index) => (
            <div className="frame_title_moblie">
              <Link to ={item.Route} key={index} >
              
              <p  onClick={() => setCloseClick()}>{item.title}</p>
              </Link>
              
            </div>
          ))}

          <div className="frame_button_moblie">
            <Link to="/Login">
              <button> Tạo Tài Khoản</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_header__content">
        <div className="logo">
          <img src={MainLogo} alt="" />
        </div>
        <div className="topic">
          {HeaderRef.map((item, index) => (
            <div className="main_li">
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link to={item.Route}>{item.title}</Link>
              </li>
            </div>
          ))}
        </div>

        {valueUser !== true ? (
          <div className="button_header">
            <Link to="/Login">
              <button> Tạo Tài Khoản</button>
            </Link>
          </div>
        ) : (
          <div className="button_header">
            <Link to="/Login" onClick={() =>setValueUser(false)}>
              <button> Đăng Xuất</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
