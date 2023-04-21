import React from "react";
import sea from "../../Assets/sea-wallpaper-12.jpg";
function CompAtProg() {
  return (
    <div className="compatprog-container">
      <img className="compatprog-img" src={sea}></img>
      <div className="container-compatprog-bacground"></div>
      <div className="compatprog-container-title">
        <div className="compatprog-title">
          <h4 className="loading">Loading...</h4>
          <p className="compatprog-paragraf-title">
            Vom reveni curând cu detalii! Urmărește-ne pe rețelele sociale ca sa
            fii la curent cu noutățile.
          </p>
        </div>
        <div className="compatprog-icon">
          <a href="https://ro-ro.facebook.com/">
            <i class="fa-brands fa-facebook-f ateProg "></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram ateProg"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube ateProg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompAtProg;
