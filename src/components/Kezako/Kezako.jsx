import React from 'react';
import './Kezako.css';
import ModalConcept from '../Modal/ModalConcept';
import ModalEquipe from '../Modal/ModalEquipe';
import ModalContact from '../Modal/ModalContact';

function Kezako() {
  return (
    <section className="body">
      <div className="zoom">
        <a href="http://localhost:3000/shop">
          <img
            className="grandePhoto"
            src="src/img/equipe.jpg"
            alt="photo"
            onClick="http://localhost:3000/shop"
          />
        </a>
      </div>
      <h3 className="text">Kitac Kezako</h3>
      <div className="container">
        <div className="zoom"></div>
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
