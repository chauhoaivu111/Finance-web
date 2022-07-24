import React, { useState } from "react";
import "./Consult.scss";
import axios from "axios";
import Contant from "../../Contant";

import { IconButton, Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const componentDidMount = () => {
  window.scrollTo(0, 10);
};

const Consult = () => {
  componentDidMount();

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const [client, setClient] = useState({
    clientName: "",
    phoneNumber: "",
    email: "",
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
    document.getElementById("resets").value = "";
    document.getElementById("resetss").value = "";
    document.getElementById("resetsss").value = "";

    try {
      const data = {
        fullName: client.clientName,
        phoneNumber: client.phoneNumber,

        email: client.email,
      };

      const emptyfields = [];

      let field = "";

      for (field in data) {
        if (data[field] === "") {
          emptyfields.push(field);
        }
      }
      if (emptyfields.length > 0) {
        setOpen(true);
      } else {
        let token = await axios({
          method: "POST",
          url: Contant + "api/user/services/request/advisory",
          data,
        });

        setOpens(true);

        client.phoneNumber = "";
        client.email = "";
        client.clientName = "";
       
      }
    } catch (error) {
      if (error.message != null) {
        console.log("errr", error.message);
      }
    }
  };

  //   Alert error -----------------------------------------
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloses = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpens(false);
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
    <div className="main_consult">
      <div className="title_consult">
        <h1>Đăng Kí Tư Vấn</h1>
      </div>
      <div className="content_consult">
        <h4>ThÔNG TIN CÁ NHÂN</h4>
      </div>

      <form id="myForm">
        <div className="frame_phone">
          <p>Họ và tên *</p>
          <div className="Inputs">
            <input
              placeholder="Nhập Họ và tên..."
              value={client.clientName}
              onChange={handleSubmit}
              name="clientName"
              id="resets"
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
              id="resetss"
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
              id="resetsss"
            />
          </div>
        </div>
      </form>

      <div className="consult_button">
        <button onClick={Submit}>
          Đăng ký ngay <i class="bx bx-right-arrow-alt"></i>
        </button>

        <div>
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
        </div>

        <Snackbar
          open={opens}
          maxSnack={2}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          action={actions}
          onClose={handleCloses}
        >
          <div className="frame_errors">
            <Alert severity="success" className="errors">
              chúng tôi sẽ liên hệ bạn sớm nhất có thể
            </Alert>
          </div>
        </Snackbar>
      </div>
    </div>
  );
};

export default Consult;
