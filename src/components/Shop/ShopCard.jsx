import React from 'react';
import { useStateValue } from '../../context/contextProvider';
import { Link } from 'react-router-dom';
import './ShopCard.css';

function ShopCard(props) {
  const [{ prodId }, dispatch] = useStateValue();

  function recordProdId() {
    dispatch({ type: 'SET_PRODID', prodId: props.id });
  }
  return (
    <section className="SC_container" onClick={recordProdId}>
      <img className="SC_img" src={props.link} alt={props.alt} />
      <div className="SC_description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <p className="SC_price">{props.product_price.toFixed(2)}€</p>
    </section>
  );
}

export default ShopCard;
