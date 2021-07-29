import React from 'react';
import ModalConcept from '../Modal/ModalConcept';
import ModalEquipe from '../Modal/ModalEquipe';
import ModalContact from '../Modal/ModalContact';
import { Carousel } from 'react-responsive-carousel';

import './Kezako.css';

function Kezako() {
  return (
    <section className="bodyKezako">
      <div className="carouselKezako">
        <h1 className="titleShop">KITAC KEZAKO</h1>
        <Carousel showIndicators={false} showThumbs={false}>
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="img1" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="img2" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="img3" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="img4" />
        </Carousel>
      </div>
      <div className="containerKezako">
        <article className="containerModal">
          <ModalConcept />
          <h3 className="text">Le concept</h3>
        </article>
        <article className="containerModal">
          <ModalEquipe />
          <h3 className="text">L'équipe</h3>
        </article>
        <article className="containerModal">
          <ModalContact />
          <h3 className="text">Contact</h3>
        </article>
      </div>
    </section>
  );
}

export default Kezako;
