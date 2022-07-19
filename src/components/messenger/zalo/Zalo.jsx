import React from 'react'


import {Helmet} from 'react-helmet';

const Zalo = () => {
  return (
    <div>

        <Helmet>
        <script src="https://sp.zalo.me/plugins/sdk.js"></script>
        </Helmet>
        <div class="zalo-chat-widget" data-oaid="3351945040214228269" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="350" data-height="420"></div>
        
        
    </div>
  )
}

export default Zalo