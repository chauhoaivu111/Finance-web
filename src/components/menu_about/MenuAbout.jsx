

import React from 'react';
import './MenuAbout.scss';

const MenuAbout = (props) => {
    const actives = props.actives ? "actives" : ""
  return (
    <div className='main_menu_about'>
        <div className={`frame_title ${actives}`}>
            <h3>{props.title}</h3>
        </div>

    </div>
  )
}

export default MenuAbout