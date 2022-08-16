

import React ,{useEffect,useState} from 'react';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import './User.scss';
import axios from 'axios';

import { Link } from 'react-router-dom';


const User = (props) => {

    const { setValueUser } = useContext(UserContext);


    const token = localStorage.getItem('accessToken')

    console.log(token)

    const [datas, setDatas] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios({
          method: "get",
          url: "https://tiendungfinance.com.vn/api/user/profile",
          headers: { authorization: "token: " + token },
        });

     
        setDatas(response.data);
        console.log("cllllll", response.data);
      };
      fetchData();
    }, [props]);

    console.log("profie",datas)


    
  return (
    <div className='main_user' >

        <div>

            {

                datas && (

                    <div>
                    <p>{datas.phoneNumber}</p>
                    <p>{datas.email}</p>
                    <p>{datas.fullName}</p>
                    </div>
                )
            }

           
        </div>



        <Link to = '/Login' onClick={() =>setValueUser(false)} >
       <h2>
        
       đăng xuất 
     
        
    </h2> 
    </Link>
        
    </div>
  )
}

export default User