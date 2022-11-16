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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
);
