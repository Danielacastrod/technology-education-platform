import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SalaDeAula() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  function Inicio() {
    navigate(`/home/${c_emailresp_cont}`);
  }

  function Perfil() {
    navigate(`/perfil/${c_emailresp_cont}`);
  }

  function Sair() {
    navigate("/");
  }

  function Curso() {
    navigate(`/curso/${c_emailresp_cont}`);
  }

  return (
    <div className="App">
      <h1>Sala de Aula</h1>

      <button className="button" onClick={Inicio}>
        Voltar
      </button>

      <button className="button" onClick={Inicio}>
        Home
      </button>

      <button className="button" onClick={Perfil}>
        Perfil
      </button>

      <button className="button" onClick={Sair}>
        Sair da Conta
      </button>

      <button className="button" onClick={Curso}>
        Curso
      </button>
    </div>
  );
}
