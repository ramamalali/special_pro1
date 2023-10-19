import React from "react";
import { CARDS } from "./../../Const/const";
import "./../CardAbout/CardAbout.css";

const Cardabout = () => {
  return CARDS?.map((e, index) => {
    return (
      <div
        className={
          e.reverse ? "rm_cards_container reverse" : "rm_cards_container"
        }
      >
        <div className="rm_about_num">{e.number}</div>
        <div
          className={
            e.cardcolor ? "rm_about_cards cardcolors" : "rm_about_cards"
          }
          key={index}
        >
          <div
            /* className="rm_about_card" */ className={
              e.fontcolor ? "rm_about_card fontcolor" : "rm_about_card"
            }
          >
            <h2 className="rm_about_card_h2">{e.title}</h2>
            <p className="rm_about_card_p">{e.description}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Cardabout;
