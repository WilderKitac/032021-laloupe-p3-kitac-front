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
          history.push('/');
        })
        .catch((err) => {
          // console.log(err);
          alert(err.data);
        });
    } else {
      alert('You must provide all information');
    }
  };

  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <h2>Login Page</h2>
      <label htmlFor="email" className="form__label">
        Email : <input type="email" id="email" className="form__input" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label htmlFor="password" className="form__label">
        Password :{' '}
        <input type="password" id="password" className="form__input" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <input className="button" type="submit" value="Login" />
    </form>
  );
}
