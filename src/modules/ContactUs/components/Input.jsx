import React from 'react'
import "./style/input.css"

function Input({icon , placeholder , type}) {
  return (
    <div className='div-input'>
        <img className='icon' src={icon}/>
        <input className='input outline-none' type={type}  placeholder={placeholder}/>
    </div>
  )
}

export default Input