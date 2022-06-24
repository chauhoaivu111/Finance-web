

import React from 'react';
import './SignUp.scss';
import { Link } from 'react-router-dom';

const componentDidMount = () => {
    window.scrollTo(0, 0)
  }

const SignUp = () => {
    componentDidMount();
    return (
        <div className='main_signup'>
            
    
            <div className='title_signup'>
                <h1>Đăng ký tài khoản</h1>
            </div>
            <div className='content_signup'>
                <h4>ThÔNG TIN CÁ NHÂN
                </h4>
            </div>
            <div className='frame_phone'>
                <p>Họ và tên *</p>
                <div className='Inputs'>
                    <input placeholder='Nhập họ và tên...'/>
                </div>
    
            </div>
    
    
            <div className='frame_pass'>
                <p>Số điện thoại *</p>
                <div className='Inputs'>
                    <input placeholder='Nhập số điện thoại...'/>
                </div>
    
            </div>

            <div className='frame_pass'>
                <p>Email *</p>
                <div className='Inputs'>
                    <input placeholder='Nhập Email...'/>
                </div>
    
            </div>
            <div className='frame_pass'>
                <p>Mật khẩu *</p>
                <div className='Inputs'>
                    <input placeholder='Nhập mật khẩu...'/>
                </div>
    
            </div>
            <div className='frame_pass'>
                <p>Nhập lại mật khẩu *</p>
                <div className='Inputs'>
                    <input placeholder='Nhập lại mật khẩu...'/>
                </div>
    
            </div>
            <div className='linktologin'>
            <h5>bạn đã có tài khoản?</h5>
           
            <Link to='/Login'> <h4>đăng nhập</h4></Link>

        </div>
           
    
            <div className='signup_button'>
            <button>
                    Đăng ký
                </button>
            </div>
    
    
    
        </div>
      )
    }
    

export default SignUp