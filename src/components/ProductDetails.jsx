import React from 'react';

function ProductDetails(props) {
  const Product = props.productInfo;
  return (
    <section>
      <h1>{Product?.maininformation[0].name}</h1>
      <img src={Product?.images[0].link} alt={Product?.images[0].link}></img>
      <div>
        <p>{Product?.maininformation[0].difficulty}</p>
        <p>{Product?.maininformation[0].completion_time}</p>
        <p>{Product?.maininformation[0].description}</p>
        <div>
          <h2>Matières</h2>
          {Product?.materials.map((material) => (
            <figure key={material.id}>
              <img src={material.image} alt={material.material_type}></img>
              <p key={material.id}>{material.material_type}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
