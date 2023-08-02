/* The code is importing various components and libraries from the React and react-router-dom packages. */
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
 * The function exports a component that sets up the routing for different paths in a React
 * application.
 * @returns a JSX code that sets up the routing for different paths in the application. It uses the
 * React Router library to define the routes and their corresponding components. The components being
 * rendered for each route include Inicio, Cadastro, TermosECondicoes, PoliticaDePrivacidade, Login,
 * RecSenha, Home, SalaDeAula, Curso, and Perfil.
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
        <Route path="/saladeaula/:c_emailresp_cont" element={<SalaDeAula />} />
        <Route path="/curso/:c_emailresp_cont" element={<Curso />} />
        <Route path="/perfil/:c_emailresp_cont" element={<Perfil />} />
      </Routes>
    </Router>
  );
}
