import React from 'react'
import OvalShape from '../../../components/Ovalshape/OvalShape'
import Title from '../../../components/title/Title'
import { detilsFaq } from '../const/titleDetilsFaq'
import Questions from '../components/Questions'
import './style/faq.css'
import DivQuestion from '../components/DivQuestion'
function Faq() {
  return (
    <div className='faq' >
      <OvalShape />
      <Title title={detilsFaq.title} img={detilsFaq.images} />
      <DivQuestion />
    </div>
  )
}

export default Faq
