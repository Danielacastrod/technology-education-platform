import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  function Perfil() {
    navigate(`/perfil/${c_emailresp_cont}`);
  }

  function Sair() {
    navigate("/");
  }

  function SalaDeAula() {
    navigate(`/saladeaula/${c_emailresp_cont}`);
  }

  return (
    <div className="App">
      <h1>Home</h1>

      <button className="button" onClick={Perfil}>
        Perfil
      </button>

      <button className="button" onClick={Sair}>
        Sair da Conta
      </button>

      <button className="button" onClick={SalaDeAula}>
        Sala de Aula
      </button>
    </div>
  );
}
