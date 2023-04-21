import React from "react";

function BannerCompetitii({ img, titleC, detail, button }) {
  return (
    <div className="bannercompetitii-container  item-1">
      <img className="bannercompetitii-picture" src={img}></img>
      <div className="bannercompetitii-picture-d">
      <h2>{titleC}</h2>
      <div className="bannercompetitii-line"></div>
      <p className="bannercompetitii-p">{detail}</p>
      <button className="bannercompetitii-button">{button}</button>
      </div>
    </div>
  );
}

export default BannerCompetitii;
