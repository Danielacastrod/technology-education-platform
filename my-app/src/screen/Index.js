import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainScreen from "./mainScreen";

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
      <MainScreen/>
    </div>
  );
}
