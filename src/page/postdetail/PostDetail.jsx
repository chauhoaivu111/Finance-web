
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import Swipers from "../../components/swiper/Swiper";
import PostData from "../../assets/data/Post_data";


const PostDetail = (props) => {






  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "https://tiendungfinance.com.vn/api/posts/",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });
      setDatas(response.data);
      console.log("id", response.data);
    };
    fetchData();
  }, [props]);



  
  




  const getId = props.match.params.id;



const getData = datas.find(item => {
  return item.id === getId;
});







  return (
    <div>
      <div style={{ paddingTop: "300px" }}>

     {
      PostData.slice(0.1).map((item,index) =>(
        <div key={index} dangerouslySetInnerHTML={{__html: item.content}}/>

     
      ))
     }

     {getData && (
        <div>
          <h1>{getData.content}</h1>
          <h2>id: {getData.id}</h2>
          <h2>{getData.title}</h2>
          <img src={"https://tiendungfinance.com.vn/api/data/images/" + getData.coverPhoto} alt =''/>
        </div>
      )}
  
      

      </div>

      
      <Swipers/>
    </div>
  );
};

export default PostDetail;
