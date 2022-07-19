

import React from 'react'

import MessengerCustomerChat from 'react-messenger-customer-chat';

import {Helmet} from 'react-helmet'

const Facebook = () => {



(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
    

      
   
   
 
  return (
    <div>

       



  

        

 

   
    


        
    {/* <MessengerCustomerChat pageId="102069509257886" appId="533152401934863"/>, */}


    </div>
  )
}

export default Facebook