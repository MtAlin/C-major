import React, { useState,useCallback } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MajorCarousel({ sliders }) {
  const Nextarrow = ({ onClick }) => {
    return (
      <button
        className="fa-solid fa-chevron-right slide-next"
        onClick={onClick}
      ></button>
    );
  };
  const Prevarrow = ({ onClick }) => {
    return (
      <button
        className="fa-solid fa-chevron-left slide-prev"
        onClick={onClick}
      ></button>
    );
  };

  const [speed, setSpeed] = useState(2000);
  const handleSpeed = (slide) => {
    switch (slide) {
      case 0:
        return 3000;
      case 1:
        return 2000;
      case 2:
        return 1000;
      case 3:
        return 2000;
      default:
        return 1000;
    }
  
  };
  
  const handleAfterChange = useCallback((slide) => {
    setSpeed(handleSpeed(slide));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: speed,
    arrows: true,
    adaptiveHeight: true,
    className: "slides",
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />,
    afterChange:handleAfterChange
  };
  return (
    <div className="container-carousel">
      <Slider {...settings}>
        {sliders.map((slider, index) => {
          return (
            <div key={index} className="carousel-sub-container">
              <img className="image-carousel" src={slider.img}></img>
              <div className="carousel-background"></div>
              <div className="carousel-title">
                <h1 >{slider.sliderTitle}</h1>
                <h4>{slider.sliderSubtitle}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MajorCarousel;
