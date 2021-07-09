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
          dispatch({ type: 'SET_USER', user: data.user });
          dispatch({ type: 'SET_JWT', jwt: data.token });
          dispatch({ type: 'SET_ROLE', jwt: data.role });
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

  return (
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
  );
}
