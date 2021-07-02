import React, { useState, useEffect } from 'react';
import ProductDetails from './components/ProductDetails';

import './App.css';

function App() {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    let id = 5;
    fetch(`http://localhost:8000/api/products/${id}/productsheet`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProductInfo(data);
      });
  }, []);
  // console.log(productInfo);

  return (
    <main className="rsw-container">
      <ProductDetails productInfo={productInfo} />
    </main>
  );
}

export default App;
