import React, { useState } from 'react'
import upImg from '../assets/images/up.svg'
import downImg from '../assets/images/down.svg'
import './style/questions.css'

function Questions({qus , desc}) {
    const [ up , setUp ] = useState('none');
    const [ down , setDown ] =useState('block')
    const [ stylequestions , setStylequestions ] = useState("questions")
    const [ styleTitle, setStyleTitle ] = useState("title-faq")
    const [ styleDesc , setStyleDesc ] = useState("desc-faq")

    function setNew() {
        setStylequestions('new-questions');
        setStyleTitle('new-title-faq')
        setStyleDesc('desc-faq-new')
        setUp("block");
        setDown("none")
    }

    function remove() {
        setStylequestions('questions');
        setStyleTitle('title-faq')
        setStyleDesc('desc-faq')
        setUp("none");
        setDown("block")
    }
    
    return (

        <div id='faq-questions' className={stylequestions} >

            <h1 className={styleTitle} >{qus}</h1>
            <p className={styleDesc} >{desc}</p>
            <img className={up} onClick={() => remove()}  src={upImg} />
            <img className={down} onClick={() => setNew() } src={downImg} />
            
        </div>

    )
}

export default Questions
