import React from "react";
import { useState } from "react";
import subVn from "sub-vn";

const Locationtest = () => {
 const  provinces = subVn.getProvinces()
  const [code, setCode] = useState();

  const [styleCode, setStyleCode] = useState();

  console.log(String(styleCode));
  console.log("ffff",code);


  const styleTown = String(code).split(",")[0]

   const ward = parseInt(code)

  const style = String(styleCode).split(",")[0];

  const dis = parseInt(style);

  console.log(dis);

  const district = subVn.getDistrictsByProvinceCode(dis);

  const town = subVn.getWardsByDistrictCode(ward);

  console.log(district);


  const [stateWard, setStateWard] = useState();

  console.log(stateWard);


  

  return (
    <div>
      <div className="select_location">
        <p>Tỉnh/ Thành phố *</p>
        <select onChange={(e) => setStyleCode(e.target.value)}>
          <option>Chọn tỉnh/ Thành phố</option>
          {provinces.map((province) => {
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
        <select onChange={(e) => setCode(e.target.value)}>
          <option>Chọn quận/ huyện</option>
          {district.map((district) => {
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
          <select onChange={e => setStateWard(e.target.value)}>
            <option>Chọn xã / phường</option>
            {town.map((town) => {
              return (
                <option key={town.code} value={[town.code, town.name]}>
                  {town.name}
                </option>
              );
            })}
          </select>
        </div>
    </div>
  );
};

export default Locationtest;
