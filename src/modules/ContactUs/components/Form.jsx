import React from 'react'
import imgName from '../assets/images/name.svg'
import imgEmail from '../assets/images/email.svg'
import imgPhone from '../assets/images/phone.svg'
import sendImg from '../assets/images/send.svg'
import Input from './Input'
import "./style/form.css"

function Form() {
    const inputTypes = [
        {
            type: "text",
            img: imgName,
            placeholder: "Full Name"
        },
        {
            type: "email",
            img: imgEmail,
            placeholder: "Email Address"
        },
        {
            type: "tel",
            img: imgPhone,
            placeholder: "Phone Number"
        },
    ]
    return (
        <form className='form'>

            {
                inputTypes.map(ele => [
                    <Input type={ele.type} placeholder={ele.placeholder} icon={ele.img} />
                ])
            }
            <textarea className='massege textarea-form' placeholder='Your Message' />

            <button className='submit' type='submit'>Send <img className='send-img' src={sendImg} /></button>

        </form>
    )
}

export default Form