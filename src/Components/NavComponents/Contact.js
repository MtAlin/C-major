import React from "react";
import BannerTitle from "./BannerTitle";
import NavBar from "../NavBar";
import Footer from "./Footer";
import BannerContact from "./BannerContact";
import MapComponent from ".././/MapComponent";
function Contact({ title }) {
  return (
    <div>
      <NavBar />
      <BannerTitle name={title.contact} description={title.description} />
      <BannerContact />
      <MapComponent />
      <Footer />
    </div>
  );
}

export default Contact;
