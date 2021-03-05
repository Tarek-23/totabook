import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./AuthProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider reducer={reducer} initialState={initialState}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
