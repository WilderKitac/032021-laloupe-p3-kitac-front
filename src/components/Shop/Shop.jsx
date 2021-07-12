import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShopCard from './ShopCard';
import './Shop.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Shop() {
  const [productList, setProductList] = useState();
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  function pageHaut() {
    window.scroll(0, 0);
  }

  return (
    <section className="shop">
      <h1>Votre Boutique Kitac</h1>
      <Link onClick={pageHaut} to="/ProductSheet" className="Sh_display">
        {productList?.map((product, index) => (
          <ShopCard key={product.name + `_` + index} {...product} />
        ))}
      </Link>
    </section>
  );
}

export default Shop;
