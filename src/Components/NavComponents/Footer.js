import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-title">
      <div className="footer-container-subtitle">
      <div>
      <h2 className="footer-title">VIVERE</h2>
        <div className="footer-line"></div>
      </div>
        <div className="footer-text-container">
          <p className="footer-text">
            <i class="fa-solid fa-angle-right fa-fotter" ></i>Să-L glorificăm pe Dumnezeu
            prin muzică, artă, sport și alte mijloace.
          </p>
          <p className="footer-text">
            <i class="fa-solid fa-angle-right fa-fotter"></i>Să prezentăm Evanghelia
            într-un mod relevant.
          </p>
          <p className="footer-text">
            <i class="fa-solid fa-angle-right fa-fotter"></i>Să venim în ajutorul
            tinerilor creștini, echipându-i spiritual și ajutându-i pe partea
            tehnică și artistică.
          </p>
        </div>
      </div>
      </div>
      <div className="subfooter">
         <div className="subfooter-2">
         <div>
         <p className="subfooter-text">© 2018-2022 C MAJOR. TOATE DREPTURILE REZERVATE.</p>
            <p className="subfooter-text">ACEST SITE FOLOSEŞTE COOKIES. CONTINUAREA NAVIGĂRII PRESUPUNE CĂ EȘTI DE ACORD CU <a href="https://www.cookiebot.com/">POLITICA DE UTILIZARE A COOKIE-URILOR.</a></p>
         </div>
            <div className='subfooter-icon'>
          <a href='https://ro-ro.facebook.com/'><i class="fa-brands fa-facebook-f sub "></i></a>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram sub "></i></a>
          <a href='https://www.youtube.com/'><i class="fa-brands fa-youtube  sub"></i></a>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Footer;
