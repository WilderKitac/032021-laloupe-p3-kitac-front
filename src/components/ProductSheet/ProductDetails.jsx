import React from 'react';
import './ProductSheet.css';

function ProductDetails(props) {
  const Product = props.productInfo;
  return (
    <section className="ps_mainSection">
      <h1 className="ps_title">{Product?.maininformation[0].name}</h1>
      <img className="ps_image" src={Product?.images[0].link} alt={Product?.images[0].link}></img>
      <div>
        <p>
          <strong>Difficulté : </strong> {Product?.maininformation[0].difficulty}
        </p>
        <p>
          <strong>Réalisation : </strong>+/- {Product?.maininformation[0].completion_time}
        </p>
        <p>
          <strong>Description : </strong>
          {Product?.maininformation[0].description}
        </p>
        <div className="ps_material_container">
          <h2>Matières</h2>
          <div className="ps_materials">
            {Product?.materials.map((material) => (
              <figure key={material.id}>
                <img className="ps_material_image"src={material.image} alt={material.material_type}></img>
                <p key={material.id}>{material.material_type}</p>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
