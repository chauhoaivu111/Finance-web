


import React from 'react';
// import  ''
import { Link } from 'react-router-dom';

import MenuAboutNew from '../menuaboutnew/MenuAboutNew';
import MenuNew_data from '../../assets/data/MenuNews';

import { useLocation } from 'react-router-dom';
import './ThemeMenuNew.scss';



const ThemeMenuNew = () => {

    const {pathname} = useLocation();


    const ActiveItem = MenuNew_data.findIndex((item) => item.route === pathname)

    console.log("sss",pathname)

  return (
    <div>
        
        <div className="frame_style_MenuAbout">
        {
          MenuNew_data.map((item,index) =>(
           
            <Link to ={item.route} key = {index}>
              <MenuAboutNew
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

export default ThemeMenuNew