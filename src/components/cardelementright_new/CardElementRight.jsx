import React from "react";
import "./CardElementRight.scss";
import { Link } from "react-router-dom";

const CardElementRight = (props) => {
  const stringtitle = props.Title;
  // console.log("dddd",stringtitle);

  const shortTitle = JSON.stringify(stringtitle);

  var alert = false;

  if (shortTitle.length > 20) {
    alert = true;
  }

  console.log(shortTitle);

  return (
    <Link to={`/Post/detail/${props.id}`}>
      <div className="main_card_element_right">
        <div className="first_element">
          <div className="sub_stye_card">
            <div className="icons">
              <img src={props.image} alt="" />
            </div>
            <div className="frame_content">
              {alert === true ? (
                <h2>{props.Title.substring(0, 15) + "..."}</h2>
              ) : (
                <h2>{props.Title}</h2>
              )}

              <p>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardElementRight;
