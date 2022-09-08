import React from 'react';
import './Footer.css'
import logo from '../Img/logo_final.png'
import appstore from '../Img/appstore.png'
import ggplay from '../Img/ggstore.png'

import {Link} from 'react-router-dom'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className='footer-full'>
                        <div className='footer-logo'>
                            <img id='footer-logowhite' src={logo}></img>
                            <span className='title' >Sản phẩm của GoPro Team</span>
                        </div>
                        <div className='footer-information'>
                            <span><a href='#'>Giới thiệu</a></span>
                            <span><Link to='/lienhe'>Liên hệ</Link></span>
                            <span><a href='#'>Góp ý</a></span>
                            <span><Link to='/dieukhoan'>Điều khoản</Link></span>
                        </div>
                        <div className='footer-information'> 
                            <a href='https://www.apple.com/app-store/'><img className='footer-iconstore' src={appstore}></img></a>
                            <a href='https://play.google.com/store'><img className='footer-iconstore' src={ggplay}></img></a>
                        </div>
                </footer>
            </div>
        );
    }
}