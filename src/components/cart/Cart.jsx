import React, { useState } from 'react';
import { useStateValue } from '../../context/contextProvider';
import axios from 'axios';
import './Cart.css';

export default function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();
  let total = 0;
  cart.forEach((item) => (total += item.prodPrice));

  //fonction pour supprimer du panier
  const removeFromCart = (searchedIndex) => {
    dispatch({ type: 'DELETE_CART', index: searchedIndex });
  };

  //fonction pour valider le panier (et renvoyer à la page de connexion si pas connecté)
  const validCart = () => {
    if (user) {
      console.log('Bonjour');
    } else {
      console.log('Pas possible');
    }
  };

  return (
    <main>
      <h1>Résumé de votre panier</h1>
      {cart.length !== 0 ? (
        <section className="cart_container">
          {cart?.map((item, index) => (
            <>
              <div key={`${item.id}-${index}`} className="cart_item">
                <div className="cart_itm_mainInfos">
                  <div className="cart_item_section_img">
                    <img src={item.prodImg} alt={item.prodName} />
                  </div>
                  <div className="cart_item_section_text">
                    <h2>{item.prodName}</h2>
                    <p>Taille sélectionnée : {item.size}</p>
                    <p>Matière sélectionnée : {item.material}</p>
                    <p>Fournitures : {item.supplies ? item.supplies : 'Pas de kit fourniture'}</p>
                    <p className="cart_price">{item.prodPrice.toFixed(2)}€</p>
                  </div>
                </div>
                <button className="cart_delete" onClick={() => removeFromCart(index)}>
                  <img src="./src/img/removeFromCart.png" alt="supprimer du panier" />
                </button>
              </div>
              <div className="cart_total"></div>
            </>
          ))}
          <div className="cart_item">
            <h3>Total de votre panier:</h3>
            <p className="cart_price">{total.toFixed(2)}€</p>
            <button className="ps_cart_button" onClick={validCart}>
              Valider le panier
            </button>
          </div>
        </section>
      ) : (
        <h2 id="emptyCart">Votre panier est vide</h2>
      )}
    </main>
  );
}
