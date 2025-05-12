import React from "react";
import ReactDOM from "react-dom/client";
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import App from "./App";
import "./globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: 'eko7Vk1lAmDxPWnt5757',
        region: 'eu',
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);
