import React from 'react';
import store from "./Redux/Store/Store";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Auth0Provider} from "@auth0/auth0-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Auth0Provider
      domain='dev-food-login.us.auth0.com'
      clientId='nVFtFDHQnX1JAL7WosHxPd8jJlo6n3H7'
      redirectUri= {window.location.origin}>
        <App />
        </Auth0Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

