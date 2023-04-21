import React from "react";
import BannerTitle from "./BannerTitle";
import BannerCompetitii from "./BannerCompetitii";
import Footer from "./Footer";
import NavBar from "../NavBar";
import socer from "../../Assets/soccer.jpg";
import volei from "../../Assets/beach-volley-1.jpg";
import volei2 from "../../Assets/beach-volley-2.jpg";
function CompetitiSportive({ title }) {
  return (
    <div>
      <NavBar />
      <BannerTitle name={title.competitii} description={title.info} />
      <div className="competitii">
        <div className="banner-competitii">
          <BannerCompetitii
            img={socer}
            titleC="Fotbal - 6v6"
            detail="Echipe de 5+1 persoane"
            button="Inscrie-te"
          />
          <BannerCompetitii
            img={volei}
            titleC="Volei pe plajă - 2v2"
            detail="Echipe de 2 persoane"
            button="Inscrie-te"
          />
          <BannerCompetitii
            img={volei2}
            titleC="Volei pe plajă - 6v6"
            detail="Echipe de 6 persoane"
            button="Inscrie-te"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompetitiSportive;
