

import React from 'react';
import './MenuAboutNew.scss';

const MenuAboutNew = (props) => {
    const activess = props.actives ? "activess" : ""
  return (
    <div className='main_menu_about_new'>
        <div className={`frame_title ${activess}`}>
            <p>{props.title}</p>
        </div>

    </div>
  )
}

export default MenuAboutNew