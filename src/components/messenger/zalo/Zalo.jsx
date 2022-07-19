import React from 'react'

import './Zalo.scss'
import {Helmet} from 'react-helmet';

const Zalo = () => {
  return (
    <div className='zalo'>

        <Helmet>
        <script src="https://sp.zalo.me/plugins/sdk.js"></script>
        </Helmet>
     
        <div class="zalo-chat-widget" data-oaid="3351945040214228269" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="1" data-width="300" data-height="300"></div>

       
        
    </div>
  )
}

export default Zalo