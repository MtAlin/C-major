import React from "react";
import BannerTitle from "./BannerTitle";
import CompAtProg from "./CompAtProg";
import Footer from "./Footer";
import NavBar from "../NavBar";
function Ateliere({ title }) {
  return (
    <div>
      <NavBar />
      <BannerTitle name={title.ateliere}  description={title.info}/>
      <CompAtProg />
      <Footer/>
    </div>
  );
}

export default Ateliere;
