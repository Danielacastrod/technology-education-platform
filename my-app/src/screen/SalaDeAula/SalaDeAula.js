import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Header } from "../../StylesGlobal/Header/Header";
import NavType2 from "../../StylesGlobal/Header/NavType2";
import { TitleHeader } from "../../StylesGlobal/Header/TitleHeader";

import Rodape from "../../StylesGlobal/Rodape/Rodape";
import aulaLogica_1 from "../img/aulaLogica_1.png";
import aulaLogica_2 from "../img/aulaLogica_2.png";
import aulaPython_1 from "../img/aulaPython_1.png";
import aulaPython_2 from "../img/aulaPython_2.png";
import programacao_1 from "../img/programacao_1.png";
import html_1 from "../img/html_1.png";

export default function SalaDeAula() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  const carrossel1 = useRef(null);
  const carrossel2 = useRef(null);

  const encodedEncryptedEmail = encodeURIComponent(c_emailresp_cont);

  function Curso() {
    navigate(`/curso/${encodedEncryptedEmail}`);
  }

  function Dicas() {
    navigate(`/dicas/${encodedEncryptedEmail}`);
  }

  const handleEsquerdaClick1 = (e) => {
    e.preventDefault();
    carrossel1.current.scrollLeft -= carrossel1.current.offsetWidth;
  };
  const handleDireitaClick1 = (e) => {
    e.preventDefault();
    carrossel1.current.scrollLeft += carrossel1.current.offsetWidth;
  };

  const handleEsquerdaClick2 = (e) => {
    e.preventDefault();
    carrossel2.current.scrollLeft -= carrossel2.current.offsetWidth;
  };
  const handleDireitaClick2 = (e) => {
    e.preventDefault();
    carrossel2.current.scrollLeft += carrossel2.current.offsetWidth;
  };

  return (
    <div className="App">
      <Header>
        <NavType2 />
        <TitleHeader>
          <h1>Sala de Aula</h1>
        </TitleHeader>
      </Header>

      <main className="corpo--app">
        <h2 className="tituloCorpo--app">Aulas</h2>

        <div class="aulas--app">
          <button
            className="seta--app esquerda--app"
            onClick={handleEsquerdaClick1}
          ></button>
          <div className="carrossel--app" ref={carrossel1}>
            <button className="botaoAula--app" onClick={Curso}>
              <img
                className="imagemAula--app"
                src={aulaLogica_1}
                alt="Lógica de Programação - 1"
              />
              <div className="boxNomeAula--app">
                <p className="nomeAula--app">Lógica de Programação - 1</p>
              </div>
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img
                className="imagemAula--app"
                src={aulaLogica_2}
                alt="Lógica de Programação - 2"
              />
              <div className="boxNomeAula--app">
                <p className="nomeAula--app">Lógica de Programação - 2</p>
              </div>
            </button>{" "}
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img
                class="imagemAula--app"
                src={aulaPython_1}
                alt="Primeiros passos com Python"
              />
              <div className="boxNomeAula--app">
                <p className="nomeAula--app">Primeiros passos com Python</p>
              </div>
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img
                class="imagemAula--app"
                src={aulaPython_2}
                alt="Criando jogos com Python"
              />
              <div className="boxNomeAula--app">
                <p className="nomeAula--app">Criando jogos com Python</p>
              </div>
            </button>
          </div>
          <button
            className="seta--app direita--app"
            onClick={handleDireitaClick1}
          ></button>
          {/** vai direto pra plataforma de jogo escolhido*/}
        </div>

        <h2 className="tituloCorpo--app">Dicas</h2>
        <div className="aulas--app">
          <button
            className="seta--app esquerda--app"
            onClick={handleEsquerdaClick2}
          ></button>
          <div className="carrossel--app" ref={carrossel2}>
            <button className="botaoAula--app" onClick={Dicas}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Dicas}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </button>
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </button>
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </button>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <button className="botaoAula--app" onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </button>
          </div>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button
            className="seta--app direita--app"
            onClick={handleDireitaClick2}
          ></button>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
