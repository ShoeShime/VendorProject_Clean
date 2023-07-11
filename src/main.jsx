import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Auth0ProviderWithNavigate } from './providers/Auth0-provider-with-navigate'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);