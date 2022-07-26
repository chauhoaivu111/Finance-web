import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/_index.scss";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

document.title = "Tien Dung Finance";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
