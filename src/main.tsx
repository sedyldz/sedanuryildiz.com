import React from "react";
import ReactDOM from "react-dom/client";
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import App from "./App";
import "./globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";
console.log(import.meta.env.VITE_FINGERPRINT_API_KEY);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: import.meta.env.VITE_FINGERPRINT_API_KEY,
        region: 'eu',
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);
