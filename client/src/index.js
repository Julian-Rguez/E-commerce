import React from 'react';
import store from "./Redux/Store/Store";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'  //Trabajo en repo local
// axios.defaults.baseURL = 'https://e-comerse-back-production.up.railway.app/' //Trabajo en el deploy


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Auth0Provider
          domain='dev-food-login.us.auth0.com'
          clientId='nVFtFDHQnX1JAL7WosHxPd8jJlo6n3H7'>
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

