import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* This code is creating a root element using `ReactDOM.createRoot()` and rendering the `<App />`
component inside it. The root element is obtained by calling `document.getElementById("root")`,
which is typically a `<div>` element in the HTML file with the id "root". The `<App />` component is
wrapped in `<React.StrictMode>`, which is a development mode feature that performs additional checks
and warnings to help identify potential issues in the application. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
