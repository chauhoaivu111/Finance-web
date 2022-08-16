import React, { useState } from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Contant from "../../Contant";

import { IconButton, Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const componentDidMount = () => {
  window.scrollTo(0, 0);
};

const SignUp = (props) => {
  // componentDidMount();

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [Route, setRoute] = useState(false);

  const [client, setClient] = useState({
    clientName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordagain:""
  });

  const handleSubmit = (e) => {
    const value = e.target.value;

    setClient({
      ...client,
      [e.target.name]: value,
    });
  };

  // POST ---------------------------

  const Submit = async () => {
    try {
      const data = {
        fullName: client.clientName,
        phoneNumber: client.phoneNumber,
        email: client.email,
        password: client.password,
      };

      const emptyfields = [];

      let field = "";

      for (field in data){
        if(data[field] === ''){
          emptyfields.push(field)
        }
      } 

      if (emptyfields.length > 0) {
          setOpen(true);
          console.log("check",emptyfields)
      } 
      
      else if(client.passwordagain !== client.password) {
        setOpens(true)

      }
      else {
        let token = await axios({
          method: "POST",
          url: Contant + "api/user/register",
          data,
        });

       

     
        setRoute(true);
    

        client.clientName = "";
        client.phoneNumber = "";
        client.email = "";
        client.password = "";
      }
    } catch (error) {
      if (error.message != null) {
        console.log("error", error.message);
      }
    }
  };

  if (Route === true) {
    props.history.push('/Login')
  }

  console.log(client.clientName)

  //   Alert error -----------------------------------------
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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


   //   Alert error -----------------------------------------
   const handleCloses = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpens(false);
  };

  const actions = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCloses}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloses}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="main_signup">
      <div className="title_signup">
        <h1>Đăng ký tài khoản</h1>
      </div>
      <div className="content_signup">
        <h4>ThÔNG TIN CÁ NHÂN</h4>
      </div>
      <div className="frame_phone">
        <p>Họ và tên *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập họ và tên..."
            value={client.clientName}
            onChange={handleSubmit}
            name="clientName"
          />
        </div>
      </div>

      <div className="frame_pass">
        <p>Số điện thoại *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập số điện thoại..."
            value={client.phoneNumber}
            onChange={handleSubmit}
            name="phoneNumber"
          />
        </div>
      </div>

      <div className="frame_pass">
        <p>Email *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập Email..."
            value={client.email}
            onChange={handleSubmit}
            name="email"
          />
        </div>
      </div>
      <div className="frame_pass">
        <p>Mật khẩu *</p>
        <div className="Inputs">
          <input
            placeholder="Nhập mật khẩu..."
            value={client.password}
            onChange={handleSubmit}
            name="password"
            type="password"
          />
        </div>
      </div>
      <div className="frame_pass">
        <p>Nhập lại mật khẩu *</p>
        <div className="Inputs">
          <input placeholder="Nhập lại mật khẩu..." 
           value={client.passwordagain}
           onChange={handleSubmit}
           name="passwordagain"
           type="password"
          />
        </div>
      </div>
      <div className="linktologin">
        <h5>bạn đã có tài khoản?</h5>

        <Link to="/Login">
          {" "}
          <h4>đăng nhập</h4>
        </Link>
      </div>

      <div className="signup_button">
        <button onClick={Submit}>Đăng ký</button>
        <Snackbar
            open={open}
            maxSnack={2}
            autoHideDuration={900}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            action={action}
            onClose={handleClose}
          >
            <div className="frame_errors">
              <Alert severity="error" className="error">
                vui lòng điền đầy đủ thông tin
              </Alert>
            </div>
          </Snackbar>


          <Snackbar
            open={opens}
            maxSnack={2}
            autoHideDuration={900}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            action={actions}
            onClose={handleCloses}
          >
            <div className="frame_error">
              <Alert severity="error" className="error">
                nhập lại mật khẩu không chính xác!
              </Alert>
            </div>
          </Snackbar>
      </div>
    </div>
  );
};

export default SignUp;
