


import React from 'react';
import  './ThemeMenu.scss'
import { Link } from 'react-router-dom';

import MenuAbout from '../menu_about/MenuAbout';
import MenuAbout_data from '../../assets/MenuAbout';

import { useLocation } from 'react-router-dom';



const ThemeMenu = () => {

    const {pathname} = useLocation();


    const ActiveItem = MenuAbout_data.findIndex((item) => item.route === pathname)

  return (
    <div>
        
        <div className="frame_style_MenuAbout">
        {
          MenuAbout_data.map((item,index) =>(
           
            <Link to ={item.route} key = {index}>
              <MenuAbout
              title ={item.title}
              actives = {index === ActiveItem}

              />
              </Link>
              

           
          ))
        }

        
      </div>
    
    </div>
  )
}

export default ThemeMenu