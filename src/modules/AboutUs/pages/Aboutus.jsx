import React from 'react'
import Heroabout from '../components/HeroAboutus/Heroabout'
import Cardabout from '../components/CardAbout/Cardabout'
import "./../pages/About.css"

const Aboutus = () => {
  return (
    <div className="rm_about_page">
        <Heroabout/>
        <Cardabout/>
    
    </div>
  )
}

export default Aboutus