import React from "react";
import img1 from "./../../assets/img/herophoto.png";
import "./../HeroAboutus/Heroabout.css";

const Heroabout = () => {
  return (
    <div className="rm-about_hero">
      <h2 className="rm_about_title">Make Your Choice</h2>
      <h2 className="rm_about_title">ESIER & FASTER</h2>
      <img src={img1} className="rm_about_img1" alt="" />
    </div>
  );
};

export default Heroabout;
