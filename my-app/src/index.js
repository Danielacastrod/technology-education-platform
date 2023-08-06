import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import App from "./App";

/* Este código está criando um elemento raiz usando `ReactDOM.createRoot()` e renderizando o componente `<App />` dentro dele. O elemento raiz é obtido chamando `document.getElementById("root")`, que normalmente é um elemento `<div>` no arquivo HTML com o id "root". O componente `<App />` é agrupado em `<React.StrictMode>`, que é um recurso do modo de desenvolvimento que executa verificações adicionais
e avisos para ajudar a identificar possíveis problemas no aplicativo. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
