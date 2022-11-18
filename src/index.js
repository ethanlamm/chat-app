import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
//  react-helmet-async(HelmetProvider): 优化React单页应用SEO
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// 公共样式
import './assets/styles/common.css'

// contexts（样式、颜色、布局的context）
import SettingsProvider from "./contexts/SettingsContext";

// redux/toolkit redux-persist
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SettingsProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
