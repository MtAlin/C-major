import React, {  useRef, useState } from "react";


function BannerContact() {
  const [nume, setNume] = useState("");
  const numeRef = useRef(null);
  const [nborder, setNborder] = useState("");
  const [eborder, setEborder] = useState("");

  const handleNume = (e) => {
    setNume(e.target.value);
    if (nume.length < 6) {
      setNborder("red");
    } else {
      setNborder("");
    }
  };

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!email.includes("@yahoo")) {
      setEborder("red");
    } else {
      setEborder("");
    }
  };
  return (
    <div>
      <from>
        <div className="bannerContact-container">
          <div className="banner-contact-nume-email">
            <div className="banner-contact-nume">
              <label>Nume</label>
              <input
                type="text"
                placeholder="Nume"
                className={nborder}
                value={nume}
                onChange={handleNume}
              ></input>
              <p className="minim-6-caractere">minim 6 caractere</p>
            </div>
            <div className="banner-contact-email">
              <label>Email</label>
              <input
                type="text"
                onChange={handleEmail}
                placeholder="Email"
                className={eborder}
                value={email}
              ></input>
            </div>
          </div>
          <div className="bannerContact-textarea">
            <label>Mesaj</label>
            <textarea className="textarea" placeholder="Mesaj"></textarea>
            <p className="minim-6-caractere">minim 6 caractere</p>
          </div>
          <div className="contact-checkbox">
            <label>
              <input type="checkbox"></input>
              Sunt de acord ca datele mele cu caracter personal să fie
              prelucrate strict în vederea comunicării unui răspuns la acest
              mesaj.
            </label>
            <button className="contact-btn">Trimite</button>
          </div>
        </div>
      </from>
    </div>
  );
}

export default BannerContact;
