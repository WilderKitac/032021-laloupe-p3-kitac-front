import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="encadreLogo">
        <img className="logoFooter" alt="imageFooter" src="./src/img/KITAC_logo-07.png" />
      </div>
      <div className="footerText">
        <p> Boutik </p>
        <p> Kitac et Vous</p>
        <p> La Gazette </p>
        <p> Kitac Kezako ? </p>
      </div>
      <div className="footerText">
        <p> CGV </p>
        <p> Mention Légales </p>
        <p> Paiment & livraison </p>
        <p> FAQ </p>
      </div>
      <div className="footerNetwork">
        <p> Rejoindre l'équipe </p>
        <p> Inscription Newsletter</p>
        <div className="networkLogo">
          <img className="logoNetwork" alt="imageFooter" src="./src/img/Facebook.png" />
          <img className="logoNetwork" alt="imageFooter" src="./src/img/Insta.png" />
          <img className="logoNetwork" alt="imageFooter" src="./src/img/pinterest.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
