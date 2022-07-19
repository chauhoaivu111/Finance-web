import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import "./LoanService.scss";

import subVn from "sub-vn";

import axios from "axios";

import { IconButton, Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Contant from "../../Contant";

const componentDidMount = () => {
  window.scrollTo(0, 100);
};

const LoanService = () => {
  // componentDidMount();

  // API location ----------------------

  const APIprovince = subVn.getProvinces();
  const [provinces, setProvinces] = useState();
  const [districCode, setDistricCode] = useState();
  const [town, setTown] = useState();

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  // split code and name ---------------------------------------

  // console.log(provinceCode)

  const provinceCode = String(provinces).split(",")[0];
  const provinceName = String(provinces).split(",")[1];

  // get districs by provinceCode--------------------------

  const districsCode = parseInt(provinceCode);

  const districs = subVn.getDistrictsByProvinceCode(districsCode);

  //  split --------------------------------------

  const codeDistric = String(districCode).split(",")[0];
  const nameDistric = String(districCode).split(",")[1];

  console.log(nameDistric);

  // get town -----------------------------------
  const ward = subVn.getWardsByDistrictCode(codeDistric);

  const nameTown = String(town).split(",")[1];
  console.log(nameTown);

  // get infor client -----------------------
  const [client, setClient] = useState({
    clientName: "",
    phoneNumber: "",
    cardNumber: "",
    dob: "",
    email: "",
    salary: "",
    houseNo: "",
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

    document.getElementById("selectProvinces").selectedIndex = 0
    document.getElementById("selectDistrics").selectedIndex = 0
    document.getElementById("selectTowns").selectedIndex = 0

    try {
      const data = {
        fullName: client.clientName,
        phoneNumber: client.phoneNumber,
        citizenId: client.cardNumber,
        age: client.dob,
        email: client.email,
        monthlyIncome: client.salary,

        address: {
          province: provinceName,
          district: nameDistric,
          town: nameTown,
          houseNo: client.houseNo,
        },
      };

      const emptyfields = [];
      for (let field in data) {
        if (data[field] === "") {
          emptyfields.push(field);
          
        }
      }

      if (emptyfields.length > 0) {
        setOpen(true)
        console.log(emptyfields)
        
      } else {
        let token = await axios({
          method: "POST",
          url: Contant + "api/user/services/request/borrow",
          data,
        });
        setOpens(true)

        client.clientName = ''
        client.houseNo= ''
        client.phoneNumber = ''
        client.cardNumber = ''
        client.dob = ''
        client.email = ''
        client.salary = ''  
        provinces = ''
        nameDistric = ''
        nameTown = ''
        setProvinces("")
        
        
        
      }
    } catch (error) {
      if (error.message != null) {
        console.log("error", error.message);
        setOpen(true)
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
    <div className="main_loan">
      <div className="title_loan">
        <h1>Đăng Kí khoản vay</h1>
      </div>

      <div className="main_element_frame">
        <div className="main_firt_frame_loan">
          <div className="content_loan">
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
                id ="resetName"
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
                id="resetPhone"
              />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Số CMND/CCCD *</p>
            <div className="Inputs">
              <input
                placeholder="Nhập Số CMND/CCCD..."
                value={client.cardNumber}
                onChange={handleSubmit}
                name="cardNumber"
                id ="resetCard"
              />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Năm sinh *</p>
            <div className="Inputs">
              <input
                placeholder="Nhập năm sinh..."
                value={client.dob}
                onChange={handleSubmit}
                name="dob"
                id = "resetDob"
              />
            </div>
          </div>{" "}
          <div className="frame_pass">
            <p>Email *</p>
            <div className="Inputs">
              <input
                placeholder="Nhập email..."
                value={client.email}
                onChange={handleSubmit}
                type="email"
                name="email"
                id = 'resetEmail'
              />
            </div>
          </div>
        </div>
        <div className="main_second_frame_loan">
          <div className="content_loan">
            <h4>CHỌN PHÒNG GIAO DỊCH GẦN BẠN</h4>
          </div>
          <div className="frame_phone">
            <p>Thu nhập mõi tháng *</p>
            <div className="Inputs">
              <input
                placeholder="Nhập thu nhập mỗi tháng..."
                value={client.salary}
                onChange={handleSubmit}
                name="salary"
                id = 'resetSalary'
              />
            </div>
          </div>

          <div className="select_location">
            <p>Tỉnh/ Thành phố *</p>
            <select onChange={(e) => setProvinces(e.target.value)}  id ="selectProvinces" >
              <option>Chọn tỉnh/ Thành phố</option>
              {APIprovince.map((province) => {
                return (
                  <option
                    key={province.code}
                    value={[province.code, province.name]}
                  >
                    {province.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="select_location">
            <p>quận/ huyện *</p>
            <select onChange={(e) => setDistricCode(e.target.value)} id = 'selectDistrics'>
              <option>Chọn quận/ huyện</option>
              {districs.map((district) => {
                return (
                  <option
                    key={district.code}
                    value={[district.code, district.name]}
                  >
                    {district.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="select_location">
            <p> xã / phường *</p>
            <select onChange={(e) => setTown(e.target.value)} id ="selectTowns">
              <option>Chọn xã / phường</option>
              {ward.map((town) => {
                return (
                  <option key={town.code} value={[town.code, town.name]}>
                    {town.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="frame_pass">
            <p>Số nhà *</p>
            <div className="Inputs">
              <input
                placeholder="Nhập số nhà..."
                value={client.houseNo}
                onChange={handleSubmit}
                name="houseNo"
                id = "resethouseNo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="loan_button">
        <button onClick={Submit}>
          Đăng ký ngay <i class="bx bx-right-arrow-alt"></i>
        </button>
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
              vui lòng điền đầy đủ thông tin 
            </Alert>
          </div>
        </Snackbar>

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
             Đăng ký thành công, chúng tôi sẽ liên hệ bạn sớm nhất có thể
            </Alert>
          </div>
        </Snackbar>
      </div>
    </div>
  );
};

export default LoanService;
