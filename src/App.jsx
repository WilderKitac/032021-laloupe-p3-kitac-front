import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStateValue } from '../src/context/contextProvider';
import axios from 'axios';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductSheet/ProductDetails';
import Login from './components/Login/Login';
import Kezako from './components/Kezako/Kezako';
import AdminPage from './components/Admin/AdminPage';

import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [{ user, jwt, role }, dispatch] = useStateValue();

  const refreshToken = () => {
    console.log('ok');
    axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/users/refresh_token`,
      withCredentials: true,
    })
      .then(({ data }) => {
        console.log(data);
        const { id, role, token } = data;
        console.log(id, role, token);
        console.log('before refresh token: ', 15 * 60 * 1000 - 5000);

        // setTimeout pour renouvler avant expiration l'access_token
        setTimeout(() => {
          console.log('inside setTimeout refresh token: ', 15 * 60 * 1000 - 5000);
          refreshToken();
        }, 15 * 60 * 1000 - 10000);
        dispatch({ type: 'SET_USER', user });
        dispatch({ type: 'SET_JWT', jwt: token });
        dispatch({ type: 'SET_ROLE', role: role });
        console.log('good');
      })
      .catch((err) => {
        // console.log('error refresh: ', err.response.data);
        dispatch({ type: 'RESET_USER' });
        dispatch({ type: 'RESET_JWT' });
      });
  };

  useEffect(() => {
    refreshToken();
  }, []);

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
        <Route path="/Admin">
          <AdminPage />
        </Route>
        <Route path="/ProductSheet">
          <ProductDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Kezako">
          <Kezako />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
