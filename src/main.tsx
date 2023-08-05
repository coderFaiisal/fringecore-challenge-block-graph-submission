import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.jsx";
import CounterProvider from "./context/CounterProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
