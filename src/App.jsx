import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStateValue } from '../src/context/contextProvider';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductSheet/ProductDetails';
import Login from './components/Login/Login';

import './App.css';

function App() {
  const [{ prodDetail }, dispatch] = useStateValue();

  useEffect(() => {
    let id = 5;
    fetch(`http://localhost:8000/api/products/${id}/productsheet`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: 'SET_PRODDETAIL', prodDetail: data });
      });
  }, []);

  return (
    <main className="rsw-container">
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route path="/ProductSheet">
          <ProductDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
