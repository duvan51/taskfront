import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from './redux/store.jsx';

import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap/dist/css/bootstrap.min.css';


import { GoogleOAuthProvider } from '@react-oauth/google';




createRoot(document.getElementById("root")).render(

  <GoogleOAuthProvider clientId="76349917367-harpq9u22j01sin2qmfq5r4uenbvaben.apps.googleusercontent.com">
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
   
  </StrictMode>
  </GoogleOAuthProvider>


);
