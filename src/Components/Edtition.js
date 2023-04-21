import React from "react";
import crowd from "../Assets/crowd-1.jpg";
import crowd2 from "../Assets/crowd-2.jpg";
function Edtition() {
  return (
    <div className="edition-container">
      <div className="edition-container-d">
        <div>
          <h1 className="edtion-first-title">EDIȚIILE TRECUTE</h1>
          <div className="edition-first-line"></div>
        </div>
        <div className="edition-picture-container">
          <div className="edition-picture-subcontainer">
            <img className="edition-picture" src={crowd}></img>
            <h2 className="edition-title">VIVERE 2019</h2>
            <div className="edition-line"></div>
            <p className="edtiton-paragraf">22-25 august</p>
          </div>
          <div className="edition-picture-subcontainer">
            <img className="edition-picture" src={crowd2}></img>
            <h2 className="edition-title">VIVERE 2018</h2>
            <div className="edition-line"></div>
            <p className="edtiton-paragraf">22-26 august</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edtition;
