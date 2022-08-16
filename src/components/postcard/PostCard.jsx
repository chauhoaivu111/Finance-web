import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const PostCard = (props) => {
  return (
    <Link to={`/Post/detail/${props.coverPhoto}`}>
      <div className="main_post_card">
        <div className="main_post_card_sub">
          <div className="frame_image_post">
            <img src={props.image} alt="" />
          </div>
          <div className="title_postcard">
            <p>{props.title}</p>
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

PostCard.prototype = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostCard;

// import React, { useState,useEffect } from "react";
// import "./PostCard.scss";
// import {Link} from "react-router-dom";
// import axios from "axios";
// import PropTypes from 'prop-types';
// import Contant from "../../Contant";

// const PostCard = (props) => {

//   const removeCartItem = async () => {

//     const respone = await axios({
//       method: 'delete',
//       url: `https://tiendungfinance.com.vn/api/admin/posts/delete/${props.coverPhoto}`,
//       headers: {
//         'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwOTYzNTIwMTAwIiwicm9sZSI6IkFETUlOIiwibGFzdCI6MTY1ODU4Nzk0ODIzNSwiaWF0IjoxNjU4NTg3OTQ4LCJleHAiOjE2NjExNzk5NDh9.MG3Hdx3ZTLMqNrsdB1nnmVBDokdNJYEkMiIm7Famv7c"}`
//       },
//     })

//     // if (respone.data.success === true) {
//     //   window.location.reload()

//     // }

//     window.location.reload()
//   }

//   return (

//     // to = {`/Post/detail/${props.coverPhoto}`}

//     // <Link   >
//     <div className="main_post_card" >
//       <div className="main_post_card_sub">
//         <div className="frame_image_post">
//           <img src={props.image}  alt=''/>
//         </div>
//         <div className="title_postcard">
//           <p  >{props.title}</p>
//         </div>
//         <div className="frame_time">
//           <p>{props.time}</p>
//         </div>
//         <div className="frame_button_post_card">
//           <button onClick={() => removeCartItem()}>
//             Xem ngay <i class="bx bx-chevrons-right"></i>
//           </button>
//           {/* <p>{props.id}</p> */}
//         </div>
//       </div>
//     </div>
//     // </Link>
//   );
// };

// PostCard.prototype ={
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired
// }

// export default PostCard;
