import { Component, useState } from "react";
import subVn from "sub-vn";
import "./Location.scss";

class Location extends Component {


  


  constructor(props) {
    super(props);

    

    this.state = {
      provinces: subVn.getProvinces(),
      districts: [],
      town: [],
      exportpovince: "",
      exportdistricts: "",
    };
    this.onProvinceClick = this.onProvinceClick.bind(this);
    this.ondistrictlick = this.ondistrictlick.bind(this);


 
  }

  

  onProvinceClick(event) {
    let provinceCode = event.target.value.split(",")[0];  event.preventDefault();

    console.log(provinceCode)
  
    let provinceName = event.target.value.split(",")[1];

    this.setState({
      districts: subVn.getDistrictsByProvinceCode(provinceCode),
    });

    this.setState({
      exportpovince: (provinceName = event.target.value.split(",")[1]),
    });

    
  }

  ondistrictlick(event) {
    event.preventDefault();
    let districtCode = event.target.value.split(",")[0];
    let districtName = event.target.value.split(",")[1];

    this.setState({
      exportdistricts: (districtName = event.target.value.split(",")[1]),
    });

    this.setState({
      town: subVn.getWardsByDistrictCode(districtCode),
    });

    console.log(districtName);
  }

  onWardlick(event) {
    event.preventDefault();
    // let townCode = event.target.value.split(",")[0];
    let name = event.target.value.split(",")[1];

    console.log(name);
  }


  
  render() {
    let { provinces, districts, town, exportpovince, exportdistricts } =
      this.state;



    

      

    console.log("check", exportpovince);
    console.log("note", exportdistricts);

    return (
      <div>
        <div className="select_location">
          <p>Tỉnh/ Thành phố *</p>
          <select onChange={this.onProvinceClick}>
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
          <select onChange={this.ondistrictlick}>
            <option selected >Chọn quận/ huyện</option>
            {districts.map((district) => {
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
          <select onChange={this.onWardlick}>
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
  }
}




export default Location;
