import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { PiFacebookLogoBold , PiInstagramLogoBold , PiTwitterLogoBold } from 'react-icons/pi';

import "./style/icons.css"

function IconsSocial() {
  return (
    <div className='icons-div'>
        <p className='community' >Join Our Community</p>
        <div className='icons-social'>
            <a className='child-icon' ><PiTwitterLogoBold size={35} className='logo' /></a>
            <a className='child-icon'><PiInstagramLogoBold size={35} className='logo' /></a>
            <a className='child-icon'><PiFacebookLogoBold size={35} className='logo' /></a>
            <a className='child-icon'><IoLogoWhatsapp size={35} className='logo' /></a>
        </div>
        
    </div>
  )
}

export default IconsSocial