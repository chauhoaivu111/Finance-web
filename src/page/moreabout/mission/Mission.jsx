

import React from 'react';
import ThemeMenu from '../../../components/thememenu/ThemeMenu';

import './Mission.scss';
import about_img_mission from '../../../assets/About_img/about_img_mission.jpg'

const Mission = () => {
  return (
    <div className='main_mission'>

    <div className='frame_mission '>
      

    <ThemeMenu/>

    <div className="frame_img_mission ">
      <img src = {about_img_mission} />
    </div>
    </div>
   


    

  </div>
  )
}

export default Mission