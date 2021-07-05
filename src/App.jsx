import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductSheet/ProductDetails';

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
      <Switch>
        <Route exact path="/">
          <div>Welcome page</div>
        </Route>
        <Route path="/ProductSheet">
          <ProductDetails productInfo={productInfo} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
