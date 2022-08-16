import React from "react";
import "./CardService.scss";
import { Link } from "react-router-dom";


const CardService = (props) => {

  const stringtitle = props.Title
  // console.log("dddd",stringtitle);

  const shortTitle = JSON.stringify(stringtitle)

  var  alert = false

  if (shortTitle.length > 20 ) {
    alert = true;

  }
  
  console.log(shortTitle)

  return (


    <Link to={`/Product/detail/${props.id}`} >
    <div className="main_cardss">
      <div className="first_elementss">
        <div className="sub_stye_card">


        <div className="icons">
          <img src={props.image} alt='' />
        </div>
        <div className="frame_content">
          {
            alert === true ?  <h2>{props.Title.substring(0,16) + "..."}</h2> :  <h2>{props.Title}</h2>
            
          }
         
          <p>{props.date}</p>
        </div>
        </div>
      
      </div>

      <div className="more_contact">
        <Link to=''>
        <p>
          {" "}
          <i class="bx bx-right-arrow-alt"></i>Thông tin chi tiết{" "}{props.content}
        </p>
        </Link>
        
      </div>
      <div className="button_card">
        <Link to=''> <button>Tư vấn ngay</button></Link>
        
      </div>
    </div>
    </Link>
    
  );
};

export default CardService;
