import React from 'react'
import OvalShape from '../components/OvalShape'
import "./style/contact.css"
import Form from '../components/Form'
import Title from '../../../components/title/Title'
import detils from '../const/titleDetils'
function Contactus() {
  return (
    <div className='contact'>
        <OvalShape />
        <Title title={detils.title} img={detils.image} />
        <Form />
    </div>
  )
}

export default Contactus