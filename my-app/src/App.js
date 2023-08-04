/* O código está importando vários componentes e bibliotecas dos pacotes React e react-router-dom. */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./screen/Index";
import Cadastro from "./screen/Cadastro";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Perfil from "./screen/Perfil";
import RecSenha from "./screen/RecSenha";
import TermosECondicoes from "./screen/TermosECondicoes";
import PoliticaDePrivacidade from "./screen/PoliticaDePrivacidade";
import SalaDeAula from "./screen/SalaDeAula";
import Curso from "./screen/Curso";

/**
A função exporta um componente que configura o roteamento para diferentes caminhos em um aplicativo React.
@returns um código JSX que configura o roteamento para diferentes caminhos no aplicativo. Ele usa a biblioteca React Router para definir as rotas e seus componentes correspondentes. Os componentes que estão sendo renderizados para cada rota incluem Inicio, Cadastro, TermosECondicoes, PoliticaDePrivacidade, Login, RecSenha, Home, SalaDeAula, Curso e Perfil.
*/
export default function App() {
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
        <Route path="/home" element={<Home />} />
        <Route path="/saladeaula/:c_emailresp_cont" element={<SalaDeAula />} />
        <Route path="/saladeaula" element={<SalaDeAula />} />
        <Route path="/curso/:c_emailresp_cont" element={<Curso />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/perfil/:c_emailresp_cont" element={<Perfil />} />
      </Routes>
    </Router>
  );
}
