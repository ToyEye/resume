import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <React.StrictMode>
    {/* <Routes> */}
    {/* <Route path="/" element={<App />} /> */}
    <App />
    {/* </Routes> */}
  </React.StrictMode>
  // </BrowserRouter>
);
