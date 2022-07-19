import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import { IconButton, Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Contant from "../../Contant";

import axios from "axios";

const componentDidMount = () => {
  window.scrollTo(0, 0);
};


const Login = (props) => {
  componentDidMount();

  const [open, Setopen] = useState(false);
  const [Route, setRoute] = useState(false);

  const [customers, setCustomers] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    const value = e.target.value;

    setCustomers({
      ...customers,
      [e.target.name]: value,
    });
  };

 
  


  // API -------------------------------------------

  const Submit = async () => {
    try {
      let token = await axios({
        method: "POST",
        url: Contant + "api/user/login",
        data: {
          phoneNumber: customers.phoneNumber,
          password: customers.password,
        },
      });
      localStorage.setItem("accessToken", token.data.accessToken);
      console.log("check", token.data.accessToken);

      if ((token.data.accessToken = true)) {
        setRoute(true);
      }
    } catch (error) {
      if (error.message != null) {
        console.log(error.message);
        Setopen(true);
      }
    }
  };

  if (Route === true) {
    props.history.push("/");
  }


 //   Alert error -----------------------------------------
  const handleClose = ( reason) => {
    if (reason === "clickaway") {
      return;
    }

    Setopen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="main_login">
      <div className="title_login">
        <h1>Đăng nhập</h1>
      </div>
      <div className="content_login">
        <h4>ThÔNG TIN CÁ NHÂN</h4>
      </div>
      <div className="frame_phone">
        <p>Số điện thoại *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập số điện thoại..."
            name="phoneNumber"
            value={customers.phoneNumber}
            onChange={handleSubmit}
          />
        </div>
      </div>

      <div className="frame_pass">
        <p>Mật khẩu *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập mật khẩu..."
            name="password"
            value={customers.password}
            onChange={handleSubmit}
            type='password'
          />
        </div>
      </div>
      <div className="resetPass">
        <h4>đặt lại mật khẩu</h4>
      </div>
      <div className="linktosignup">
        <Link to="/SignUp">
          {" "}
          <h4>tạo tài khoản</h4>
        </Link>
      </div>

      <div className="login_button">
        <button onClick={Submit}>Đăng nhập</button>
        <Snackbar
          open={open}
          maxSnack={2}
          autoHideDuration={1000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          action={action}
          onClose={handleClose}
        >
            <div className="frame_error">
            <Alert severity="error" className="error">
            email or password incorrect
          </Alert>
            </div>
       
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
