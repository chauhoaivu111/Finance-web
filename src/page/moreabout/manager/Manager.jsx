

import React from 'react';
import ThemeMenu from '../../../components/thememenu/ThemeMenu';
import './Manager.scss';
import about_img_manager from "../../../assets/About_img/about_img_manager.jpg";

const Manager = () => {
  return (
    <div className='main_manager'>

    <div className='frame_manager'>
      

    <ThemeMenu/>

    <div className="frame_img_manager">
      <img src = {about_img_manager} />
     
    </div>
    </div>
   


    

  </div>
  )
}

export default Manager