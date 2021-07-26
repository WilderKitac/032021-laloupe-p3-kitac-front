import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from '../src/context/contextProvider';
import reducer, { initialState } from '../src/context/reducer';
import App from './App';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.querySelector('#root'),
);
