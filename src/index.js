import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';

const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>
);

