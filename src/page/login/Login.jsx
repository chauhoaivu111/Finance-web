
import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
const componentDidMount = () => {
    window.scrollTo(0, 0)
  }

const Login = () => {
    componentDidMount();

  return (
    <div className='main_login'>

        <div className='title_login'>
            <h1>Đăng nhập</h1>
        </div>
        <div className='content_login'>
            <h4>ThÔNG TIN CÁ NHÂN
            </h4>
        </div>
        <div className='frame_phone'>
            <p>Số điện thoại *</p>
            <div className='Inputs'>
                <input placeholder='Nhập số điện thoại...'/>
            </div>

        </div>


        <div className='frame_pass'>
            <p>Mật khẩu *</p>
            <div className='Inputs'>
                <input placeholder='Nhập mật khẩu...'/>
            </div>

        </div>
        <div className='resetPass'>
            <h4>đặt lại mật khẩu</h4>

        </div>
        <div className='linktosignup'>
           <Link to='/SignUp'> <h4>tạo tài khoản</h4></Link>
        </div>

        <div className='login_button'>
            <button>
                Đăng nhập
            </button>
        </div>



    </div>
  )
}

export default Login