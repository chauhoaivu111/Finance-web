import React from 'react'
import ThemeMenu from '../../../components/thememenu/ThemeMenu';
import './Version.scss';

import about_img_vision from "../../../assets/About_img/about_img_vision.jpg";

const Version = () => {
  return (
    <div className='main_version'>

      <div className='frame_vision '>
        

      <ThemeMenu/>

      <div className="frame_img_vision ">
        <img src = {about_img_vision} />
      </div>
      </div>
     


      

    </div>
  )
}

export default Version
