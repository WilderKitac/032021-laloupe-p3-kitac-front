import React, { useState } from 'react';
import { useStateValue } from '../../context/contextProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Form.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Login({ refreshToken }) {
  const [{ jwt }, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/users/login`,
        data: { email, password },
        withCredentials: true,
      })
        .then(({ data }) => {
          const userInfos = {
            id: data.id,
            email: email,
          };
          dispatch({ type: 'SET_USER', user: userInfos });
          dispatch({ type: 'SET_JWT', jwt: data.token });
          dispatch({ type: 'SET_ROLE', role: data.role });
          if (data.token !== undefined) {
            history.push('/');
          } else {
            alert('l&aposemail ou le mot de passe est erroné');
          }
        })
        .catch((err) => {
          alert(err.response.data);
        });
    } else {
      alert('Vous devez fournir toutes les informations');
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    {
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/users/logout`,
        withCredentials: true,
        headers: { authorization: `Bearer ${jwt}` },
      })
        .then(() => {
          dispatch({ type: 'RESET_USER' });
          dispatch({ type: 'RESET_JWT' });
          dispatch({ type: 'RESET_ROLE' });
          alert('Vous avez été déconnecté');
          history.push('/');
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };

  return (
    <>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <h2>Page de connexion</h2>
        <label htmlFor="email" className="form__label">
          Email : <input type="email" id="email" className="form__input" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label htmlFor="password" className="form__label">
          Mot de passe :{' '}
          <input type="password" id="password" className="form__input" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <input className="button" type="submit" value="Se connecter" />
      </form>
      <input className="button" type="button" value="Se déconnecter" onClick={handleLogout}></input>
    </>
  );
}
