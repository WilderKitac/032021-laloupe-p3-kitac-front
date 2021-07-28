/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context/contextProvider';
import './ProductSheet.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ProductDetails() {
  const [stateTabs, setStateTabs] = useState(1);
  const [, dispatch] = useStateValue();
  const [prodDetail, setProdDetail] = useState();
  const [selectedSize, setSelectedSize] = useState('Taille');
  const [selectedMaterial, setSelectedMaterial] = useState('Matière');
  const [selectedSupplies, setSelectedSupplies] = useState(false);

  //cette fonction permet de récupérer les informations du local storage en décalant
  useEffect(() => {
    setTimeout(() => {
      let item = localStorage.getItem('tempProd');
      setProdDetail(JSON.parse(item));
    }, 100);
  }, []);

  const appearTab = (index) => {
    setStateTabs(index);
  };

  function selectProduct() {
    if (selectedSize !== 'Taille' && selectedMaterial !== 'Matière') {
      const tempTable = {
        id: prodDetail.maininformation[0].id,
        prodPrice: prodDetail.maininformation[0].product_price,
        prodName: prodDetail.maininformation[0].name,
        prodImg: prodDetail.images[0].link,
        size: selectedSize,
        sizeId: prodDetail?.size.filter((size) => size.size_letter === selectedSize)[0].id,
        material: selectedMaterial,
        materialId: prodDetail?.size.filter((size) => size.size_letter === selectedSize)[0].id,
        supplies: selectedSupplies === 'true' ? prodDetail?.supplies[0].title : null,
        suppliesId: selectedSupplies === 'true' ? prodDetail?.supplies[0].id : null,
      };
      dispatch({ type: 'ADD_CART', item: tempTable });
    } else {
      alert('Veuillez sélectionner un taille et une matière');
    }
  }

  return (
    <section className="ps_mainSection">
      <h1 className="ps_title">{prodDetail?.maininformation[0].name}</h1>
      <div className="ps_presentation">
        <div className="ps_slider_container">
          <Carousel thumbWidth={40} infiniteLoop={true} autoPlay>
            {prodDetail?.images.map((image) => (
              <>
                <img key={image.id} src={image.link} alt={image.alt}></img>
                <p className="legend">{image.alt}</p>
              </>
            ))}
          </Carousel>
        </div>
        <div className="ps_properties">
          <div className="ps_general">
            <p className="ps_price">{prodDetail?.maininformation[0].product_price.toFixed(2)}€</p>
            <div className="ps_difficulty">
              <p>
                <strong>Difficulté : </strong>
              </p>
              <div>
                <img className="ps_button" src="../src/img/button-3D.png" alt="bouton" />
                <img
                  className={
                    prodDetail?.maininformation[0].difficulty === 'Moyenne' || prodDetail?.maininformation[0].difficulty === 'Difficile'
                      ? 'ps_button'
                      : 'ps_button ps_button_inactive'
                  }
                  src="../src/img/button-3D.png"
                  alt="bouton"
                />
                <img
                  className={prodDetail?.maininformation[0].difficulty === 'Difficile' ? 'ps_button' : 'ps_button ps_button_inactive'}
                  src="../src/img/button-3D.png"
                  alt="bouton"
                />
              </div>
            </div>
            <p>
              <strong>Réalisation : </strong>+/- {prodDetail?.maininformation[0].completion_time}
            </p>
            <p>
              <strong>Description : </strong>
              {prodDetail?.maininformation[0].description}
            </p>
          </div>
          <div className="ps_material_container">
            <h2>Matières :</h2>
            <div className="ps_materials">
              {prodDetail?.materials.map((material) => (
                <div key={material.id}>
                  <figure>
                    <img className="ps_material_image" src={`${API_BASE_URL}/image/${material.image}`} alt={material.material_type}></img>
                    <p key={material.id}>{material.material_type}</p>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ps_tabContainer">
        <div className="ps_tabs_block">
          <div className={stateTabs === 1 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(1)}>
            Contenu du kit
          </div>
          {/* <div className={stateTabs === 2 ? 'ps_tabs ps_active_tabs' : 'ps_tabs'} onClick={() => appearTab(2)}>
            Personnalisation
          </div> */}
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
          {/* <p className={stateTabs === 2 ? 'ps_active-content' : 'ps_content'}>
            Personnalisation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea minus voluptatibus accusamus, ipsam tempore ut sit
            eaque enim minima modi cum perspiciatis dolores officiis temporibus vel fugit{' '}
          </p> */}
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
      <div className="ps_optionsSelect">
        <div className="ps_selector">
          <p>
            <strong>Votre taille:</strong>
          </p>
          <select
            id="ps_sizeToSelect"
            value={selectedSize}
            onBlur={(item) => setSelectedSize(item.target.value)}
            onChange={(item) => setSelectedSize(item.target.value)}>
            <option defaultValue="unselect">Tailles disponibles</option>
            {prodDetail?.size.map((item, index) => (
              <option key={index} value={item.size_letter}>
                {item.size_letter.toUpperCase()}
              </option>
            ))}
          </select>
          <br />
          <p>
            <strong>Votre matière:</strong>
          </p>
          <select
            id="ps_materialToSelect"
            value={selectedMaterial}
            onBlur={(item) => setSelectedMaterial(item.target.value)}
            onChange={(item) => setSelectedMaterial(item.target.value)}>
            <option defaultValue="unselect">Matières disponibles</option>
            {prodDetail?.materials.map((item, index) => (
              <option key={index} value={item.material_type}>
                {item.material_type}
              </option>
            ))}
          </select>
          <p className={prodDetail?.supplies[0].id ? 'ps_suppliesToSelect' : 'ps_nosupply'}>
            <strong>Fournitures:</strong>
          </p>
          <select
            className={prodDetail?.supplies[0].id ? 'ps_suppliesToSelect' : 'ps_nosupply'}
            value={selectedSupplies}
            onBlur={(item) => setSelectedSupplies(item.target.value)}
            onChange={(item) => setSelectedSupplies(item.target.value)}>
            <option value="true">Oui</option>
            <option value="false" selected>
              Non
            </option>
          </select>
        </div>
        <button className="_button" onClick={selectProduct}>
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
