import React from 'react';
import './Kezako.css';

function Kezako() {
  return (
    <section className="body">
      <div className="zoom">
        <li>
          <a href="http://localhost:3000/shop">
            <img
              className="grandePhoto"
              src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg"
              alt="photo"
              onClick="http://localhost:3000/shop"
            />
          </a>
        </li>
        <h3 className="text">Kitac Kezako</h3>
      </div>
      <div className="container">
        <article>
          <img className="photoKezako" src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg" alt="" />
          <h3 className="text">Le concept</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime facere consequatur iusto expedita blanditiis quaerat quibusdam
            fugiat dolorem similique animi, repellendus eum ullam id tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>

        <article>
          <img className="photoKezako" src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg" alt="" />
          <h3 className="text">L'équipe</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime facere consequatur iusto expedita blanditiis quaerat quibusdam
            fugiat dolorem similique animi, repellendus eum ullam id tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>

        <article>
          <img className="photoKezako" src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg" alt="" />
          <h3 className="text">Contact</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime facere consequatur iusto expedita blanditiis quaerat quibusdam
            fugiat dolorem similique animi, repellendus eum ullam id tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>

        <article>
          <img className="photoKezako" src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg" alt="" />
          <h3 className="text">Collaborer avec Kitac</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime facere consequatur iusto expedita blanditiis quaerat quibusdam
            fugiat dolorem similique animi, repellendus eum ullam id tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>
      </div>
    </section>
  );
}

export default Kezako;
