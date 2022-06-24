import React from "react";
import "./PostCard.scss";

const PostCard = (props) => {
  return (
    <div className="main_post_card">
      <div className="main_post_card_sub">
        <div className="frame_image_post">
          <img src={props.image} alt=''/>
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
  );
};

export default PostCard;
