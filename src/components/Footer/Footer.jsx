import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="encadreLogo">
        <img className="logoFooter" alt="imageFooter" src="/src/img/KITAC_logo-07.png" />
      </div>
      <div className="footerText">
        <Link className="FooterLink" to="/shop/0">
          <p> Boutik </p>
        </Link>
        <p> Kitac et Vous</p>
        <p> La Gazette </p>
        <Link className="FooterLink" to="/Kezako">
          <p> Kitac Kezako ? </p>
        </Link>
      </div>
      <div className="footerText">
          <p> CGV </p>
        <p> Mention Légales </p>
        <p> Paiement & livraison </p>
        <p> FAQ </p>
      </div>
      <div className="footerNetwork">
        <p> Rejoindre l'équipe </p>
        <p> Inscription Newsletter</p>
        <div className="networkLogo">
          <a className="logoLink" href=" https://www.facebook.com/KITAC-Couture-108078098194026" target="_blank">
            <img className="logoNetwork" alt="imageFooter" src="/src/img/Facebook.png" />
          </a>
          <a className="logoLink" href="https://www.instagram.com/kitac_couture/?hl=fr" target="_blank">
            <img className="logoNetwork" alt="imageFooter" src="/src/img/Insta.png" />
          </a>
          <a className="logoLink" href="https://www.pinterest.fr/" target="_blank">
            <img className="logoNetwork" alt="imageFooter" src="/src/img/pinterest.svg" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
