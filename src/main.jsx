import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider from "./contexts/TaskContext";

import "./assets/styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
