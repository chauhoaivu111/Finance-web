
import React from 'react';
import ThemeMenu from '../../../components/thememenu/ThemeMenu';
import './Value.scss';
import about_img_value1 from "../../../assets/About_img/about_img_value1.jpg"
import about_img_value2 from "../../../assets/About_img/about_img_value2.jpg"

const Value = () => {
  return (
    <div className='main_value'>

    <div className='frame_value'>
      

    <ThemeMenu/>

    <div className="frame_img_value">
      <img src = {about_img_value1} />
      <img src = {about_img_value2} />
    </div>
    </div>
   


    

  </div>
  )
}

export default Value