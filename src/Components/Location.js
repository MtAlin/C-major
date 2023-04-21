import React from "react";
import location from "../Assets/location.jpg";
function Location() {
  return (
    <div className="location-container">
      <img className="location-img" src={location}></img>
      <div className="location-background"></div>
      <div className="location-title">
        <div className="location-title-d">
          <div>
            <h1 className="locatie">LOCATIE</h1>
            <div className="location-line"></div>
          </div>
          <div>
            <h1 className="location-subtitle">Piațeta Perla, Mamaia</h1>
            <a
              className="location-subtitle-map"
              href="https://www.google.com/maps/place/44%C2%B013"
            >
              {" "}
              <i class="fa-solid fa-map-location-dot"></i>Vezi mai multe detalii
              pe Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
