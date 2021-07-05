import React, { useState } from 'react';
import './ProductSheet.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ProductDetails(props) {
  const [stateTabs, setStateTabs] = useState(1);

  const Product = props.productInfo;
  const appearTab = (index) => {
    setStateTabs(index);
  };

  return (
    <section className="ps_mainSection">
      <h1 className="ps_title">{Product?.maininformation[0].name}</h1>
      <div className="ps_slider_container">
        <Carousel thumbWidth={40} autoPlay>
          {Product?.images.map((image) => (
            <>
              <img key={image.id} src={image.link} alt={image.alt}></img>
              <p className="legend">{image.alt}</p>
            </>
          ))}
        </Carousel>
      </div>
      <div>
        <div className="ps_difficulty">
          <p>
            <strong>Difficulté : </strong>
          </p>
          <img className="ps_button" src="../src/images/button-3D.png" alt="bouton" />
          <img className={Product?.maininformation[0].difficulty === 'Moyenne' ? "ps_button" : "ps_button ps_button_inactive"} src="../src/images/button-3D.png" alt="bouton" />
          <img className={Product?.maininformation[0].difficulty === 'Difficile' ? "ps_button" : "ps_button ps_button_inactive"} src="../src/images/button-3D.png" alt="bouton" />
        </div>
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
                <img className="ps_material_image" src={material.image} alt={material.material_type}></img>
                <p key={material.id}>{material.material_type}</p>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className="ps_tabContainer">
        <div className="ps_tabs_block">
          <div className={stateTabs === 1 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(1)}>
            Contenu du kit
          </div>
          <div className={stateTabs === 2 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(2)}>
            Personnalisation
          </div>
          <div className={stateTabs === 3 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(3)}>
            Savoir faire
          </div>
          <div className={stateTabs === 4 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(4)}>
            Tailles et mesures
          </div>
        </div>
        <div className="ps_tabsContent">
          <p className={stateTabs === 1 ? 'ps_active-content' : 'ps_content'}>
            Contenu du kit : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod nemo consectetur beatae tempore ratione dignissimos
            ab repellat iusto hic, eum labore dolor. Dolor obcaecati cum illo exercitationem
          </p>
          <p className={stateTabs === 2 ? 'ps_active-content' : 'ps_content'}>
            Personnalisation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea minus voluptatibus accusamus, ipsam tempore ut sit
            eaque enim minima modi cum perspiciatis dolores officiis temporibus vel fugit{' '}
          </p>
          <p className={stateTabs === 3 ? 'ps_active-content' : 'ps_content'}>
            Savoir faire: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam similique, dolorem dolorum reprehenderit rerum
            illo quas. Ullam rem accusantium ab voluptatibus dolorum impedit distinctio quibusdam
          </p>
          <p className={stateTabs === 4 ? 'ps_active-content' : 'ps_content'}>
            Tailles et mesures: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum facere laboriosam magnam. Necessitatibus natus
            rerum omnis tempora temporibus itaque dignissimos consectetur, doloremque laudantium
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
