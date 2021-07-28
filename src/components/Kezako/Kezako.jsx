import React from 'react';
import ModalConcept from '../Modal/ModalConcept';
import ModalEquipe from '../Modal/ModalEquipe';
import ModalContact from '../Modal/ModalContact';
import { Carousel } from 'react-responsive-carousel';

import './Kezako.css';

function Kezako() {
  return (
    <section className="body">
      <div className="carouselKezako">
        <h1 className="titleShop">KITAC KEZAKO</h1>
        <Carousel showIndicators={false} showThumbs={false}>
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="photo 1" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="photo 2" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="photo 3" />
          <img className="grandePhoto" src="https://cache.marieclaire.fr/data/photo/w600_h315_ci/5b/couturematerielindispensable.jpg" alt="photo 4" />
        </Carousel>
      </div>
      <div className="container">
        <article>
          <ModalConcept />
          <h3 className="text">Le concept</h3>
        </article>
        <article>
          <ModalEquipe />
          <h3 className="text">L'équipe</h3>
        </article>

        <article>
          <ModalContact />
          <h3 className="text">Contact</h3>
        </article>
      </div>
    </section>
  );
}

export default Kezako;
