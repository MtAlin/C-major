import React from "react";
import Major from "./Major";
import Location from "./Location";
import BottomNavSlider from "./BottomNavSlider";
import Edtition from "./Edtition";
import Organization from "./Organization";
import MapComponent from "./MapComponent";
import Footer from "./NavComponents/Footer";
import MajorCarousel from "./MajorCarousel";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Home({ sliders }) {
  const [scroll, setScroll] = useState("change");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY) {
        setScroll("reset");
      } else {
        setScroll("change");
      }
    });
  }, [scroll]);

  return (
    <div>
      <div className="screen-fit">
        <NavBar scroll={scroll} />
        <MajorCarousel sliders={sliders} />
        <BottomNavSlider />
      </div>
      <Major sliders={sliders} />
      <Location />
      <Edtition />
      <Organization />
      <MapComponent />
      <Footer />
    </div>
  );
}

export default Home;
