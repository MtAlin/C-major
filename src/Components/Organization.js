import React from "react";

function Organization() {
  return (
    <div className="container-organization-background">
      <div className="organization-container">
        <div className="organization-subcontainer">
          <h1 className="organization-subcontainer-title">ORGANIZATORII</h1>
          <div className="organization-line"></div>
          <p className="organization-subcontainer-text">Bisericile evanghelice din Constanța</p>
        </div>
        <div className="organization-container-church">
          <div className="organization-church">
            <h2>Biserica Arka, Constanța</h2>
            <p className="organization-paragraf">
              <strong>Adresă</strong>: șos. Industrială nr. 2, Constanța
            </p>
            <p className="organization-paragraf">
              <strong>Program</strong>: În fiecare duminică, orele 17-19
            </p>
          </div>

          <div className="organization-church">
            <h2>Biserica Golgota, Constanța</h2>
            <p className="organization-paragraf">
              <strong>Adresă</strong>: str. Nehoiului nr. 39, Constanța
            </p>
            <p className="organization-paragraf">
              <strong>Program</strong>: În fiecare duminică, orele 10-12 și
              17-18
            </p>
          </div>
          <div className="organization-church">
            <h2>Biserica Speranța, Năvodari</h2>
            <p className="organization-paragraf">
              <strong>Adresă</strong>: str. Plopilor nr. 119, Năvodari
            </p>
            <p className="organization-paragraf">
              <strong>Program</strong>: În fiecare duminică, orele 17-19
            </p>
          </div>
          <div className="organization-church">
            <h2>Biserica Farul, Constanța</h2>
            <p className="organization-paragraf">
              <strong>Adresă</strong>: str. Pandurului nr. 81 D, Constanța
            </p>
            <p className="organization-paragraf">
              <strong>Program</strong>: În fiecare duminică, orele 10-12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
