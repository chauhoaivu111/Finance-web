

import React from 'react';
import './MenuAbout.scss';

const MenuAbout = (props) => {
    const actives = props.actives ? "actives" : ""
  return (
    <div className='main_menu_about'>
        <div className={`frame_title ${actives}`}>
            <p>{props.title}</p>
        </div>

    </div>
  )
}

export default MenuAbout