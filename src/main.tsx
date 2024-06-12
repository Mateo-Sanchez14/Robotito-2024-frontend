import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { PositionProvider } from "./context/PositionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PositionProvider>
      <App />
    </PositionProvider>
  </React.StrictMode>
);
