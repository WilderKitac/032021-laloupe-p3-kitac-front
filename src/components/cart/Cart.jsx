import React from 'react';
import { useStateValue } from '../../context/contextProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  let total = 0;
  cart.forEach((item) => (total += item.prodPrice));

  //fonction pour supprimer du panier
  const removeFromCart = (searchedIndex) => {
    dispatch({ type: 'DELETE_CART', index: searchedIndex });
  };

  //fonction pour valider le panier (et renvoyer à la page de connexion si pas connecté)
  const validCart = () => {
    if (user) {
      const data = [];
      cart.forEach((item) => data.push([item.id, user.id, item.quantity, item.sizeId, item.materialId, item.suppliesId, Date.now()]));
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/buys`,
        data: data,
      })
        .then((data) => data.data)
        .then(() => {
          const dataForEmail = {
            user: user.email,
            cart: cart,
          };
          axios({
            method: 'POST',
            url: `${API_BASE_URL}/api/send-email`,
            data: dataForEmail,
          })
            .then((data) => data.data)
            .then(() => {
              alert("Votre commande est passée, nous revenons vers vous dès qu'lle est prise en charge");
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      history.push('/login');
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
