import React from 'react'
import OvalShape from '../components/OvalShape'
import "./style/contact.css"
import Form from '../components/Form'
import IconsSocial from '../components/IconsSocial'
import Title from '../../../components/title/Title'
import detils from '../const/titleDetils'
function Contactus() {
  return (
    <div className='contact'>
        <OvalShape />
        <Title title={detils.title} img={detils.images} />
        <Form />
        <IconsSocial />
    </div>
  )
}

export default Contactus