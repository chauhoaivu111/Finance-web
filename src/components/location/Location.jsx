
import { Component } from "react";
import subVn from "sub-vn";
import './Location.scss'


export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provinces: subVn.getProvinces(),
      districts: [],
      ward: []
    };
    this.onProvinceClick = this.onProvinceClick.bind(this);
    this.ondistrictlick = this.ondistrictlick.bind(this);



    
  }

  onProvinceClick(event) {
    event.preventDefault();
    let provinceCode = event.target.value;
    this.setState({
      districts: subVn.getDistrictsByProvinceCode(provinceCode)
    });
  }

  ondistrictlick(event) {
    event.preventDefault();
    let districtCode = event.target.value;
    this.setState({
      ward: subVn.getWardsByDistrictCode(districtCode)
    });
  }
  

  render() {
    let { provinces, districts ,ward } = this.state;

    return (
      <div>

        <div className="select_location">
        <p>Tỉnh/ Thành phố *</p>
        <select onChange={this.onProvinceClick} >
          <option>Chọn tỉnh/ Thành phố</option>
          {provinces.map((province) => {
            return (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            );
          })}
        </select>

        </div>
      
        <div className="select_location">
        <p>quận/ huyện *</p>
        <select onChange={this.ondistrictlick} >
          <option>Chọn quận/ huyện</option>
          {districts.map((district) => {
            return (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            );
          })}
        </select>

       </div>
       <div className="select_location">
        <p> xã / phường *</p>
        <select >
          <option>Chọn xã / phường</option>
          {ward.map((ward) => {
            return (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            );
          })}
        </select>

        </div>

        
       
      </div>
    );
  }
}