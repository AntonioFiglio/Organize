import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeHookProvider } from "./context/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeHookProvider>
      <App />
    </ThemeHookProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
