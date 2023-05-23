import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/Montserrat-Medium.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/delivery_app">
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
