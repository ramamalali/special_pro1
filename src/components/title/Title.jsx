import React from 'react'
import "../style/title.css"

function Title({title , img}) {
  return (
    <div>
      <div className='header'>
        <h1 className='title'>{title}</h1>
        <img className='contact-icon' src={img}/>
        </div>
    </div>
  )
}

export default Title
