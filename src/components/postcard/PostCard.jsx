import React, { useState,useEffect } from "react";
import "./PostCard.scss";
import {Link} from "react-router-dom";

import PropTypes from 'prop-types';




const PostCard = (props) => {





 


  

  
 
  // to = {`/Post/detail/${props.coverPhoto}`}


  return (
    
    <Link  to = {`/Post/detail/${props.coverPhoto}`} >
    <div className="main_post_card" >
      <div className="main_post_card_sub">
        <div className="frame_image_post">
          <img src={props.image}  alt=''/>
        </div>
        <div className="title_postcard">
          <p  >{props.title}</p>
        </div>
        <div className="frame_time">
          <p>{props.time}</p>
        </div>
        <div className="frame_button_post_card">
          <button>
            Xem ngay <i class="bx bx-chevrons-right"></i>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

PostCard.prototype ={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default PostCard;
