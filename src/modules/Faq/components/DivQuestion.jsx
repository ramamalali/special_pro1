import React from 'react'
import Questions from './Questions'
import './style/divQuestion.css'
import { detilsQus } from '../const/detilsQuestion'
function DivQuestion() {

  return (

    <div className='div-questions'>
        {
            detilsQus.map(ele => [
                <Questions qus={ele.question} desc={ele.desc} />
            ])
        }
        


    </div>

  )

}

export default DivQuestion
