import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="encadreHome">
        <img className="logoHome" alt="imageHome" src="./src/img/KITAC_logo-01.png" />
      </section>
      <section className="backroundHome">
        <section className="encadreTitre">
          <h1 className="titreHome">TITRE</h1>
          <h2 className="titreHome">Sous Titre</h2>
          <p className="titreHome">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s
          </p>
        </section>
        <section className="encadreShop">
          <h1 className="titleShop">LA BOUTIK A KITS</h1>
          <div className="imgShop">
            <img className="imgShop" alt="imageHome" src="https://picsum.photos/350/200" />
          </div>
          <section className="encadreDescriptionShop"></section>
          <section className="descriptionShop">
            <h1 className="titleShop">LES KITS ACCESSOIRES</h1>
            <h2 className="titleShop">Pour Soi</h2>
            <p className="titleShop">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Home;
