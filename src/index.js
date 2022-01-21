import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/Nav";
import Loader from "./components/Loader";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <NavbarComp />
        <App />
        <Loader />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
