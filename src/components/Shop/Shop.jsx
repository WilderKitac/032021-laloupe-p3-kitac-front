import React, { useState, useEffect } from 'react';
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

  return (
    <section>
      {productList?.map((product, index) => (
        <ShopCard key={product.info + index} {...product} />
      ))}
    </section>
  );
}

export default Shop;
