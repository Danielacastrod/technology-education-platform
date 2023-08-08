import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "../screen/Index";
import Cadastro from "../screen/Cadastro/Cadastro";
import Login from "../screen/Login/Login";
import Home from "../screen/Home/Home";
import Perfil from "../screen/Perfil/Perfil";
import RecSenha from "../screen/RecuperaSenha/RecSenha";
import TermosECondicoes from "../screen/TermosECondicoes";
import PoliticaDePrivacidade from "../screen/PoliticaDePrivacidade";
import SalaDeAula from "../screen/SalaDeAula/SalaDeAula";
import Curso from "../screen/Curso";
import Dicas from "../screen/Dicas/Dicas";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/termosecondicoes" element={<TermosECondicoes />} />
        <Route
          path="/politicadeprivacidade"
          element={<PoliticaDePrivacidade />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/recsenha" element={<RecSenha />} />
        <Route path="/home/:c_emailresp_cont" element={<Home />} />
        <Route path="/saladeaula/:c_emailresp_cont" element={<SalaDeAula />} />
        <Route path="/dicas/:c_emailresp_cont" element={<Dicas />} />
        <Route path="/curso/:c_emailresp_cont" element={<Curso />} />
        <Route path="/perfil/:c_emailresp_cont" element={<Perfil />} />
      </Routes>
    </Router>
  );
}
