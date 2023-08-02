import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Inicio({ navigation }) {
  const navigate = useNavigate();

  function cadastrar() {
    navigate("/cadastro");
  }
  function login() {
    navigate("/login");
  }

  return (
    <div className="App">
      <h1>Tela Inicial</h1>

      <button className="button" onClick={cadastrar}>
        Cadastrar
      </button>
      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  );
}
