import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rodape from "./Rodape";
import aulaLogica_1 from "./img/aulaLogica_1.png";
import aulaLogica_2 from "./img/aulaLogica_2.png";
import aulaPython_1 from "./img/aulaPython_1.png";
import aulaPython_2 from "./img/aulaPython_2.png";
import programacao_1 from "./img/programacao_1.png";
import html_1 from "./img/html_1.png";

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
      <header className="cabecalho--app">
        <nav className="navegacaoCabecalho--app">
          <button className="botaoVoltar--curso" onClick={Inicio}>
            <div className="iconVoltar--curso"></div>Voltar
          </button>
          <button className="logoInicio--app" onClick={Inicio}></button>
          <div className="boxCabecalho--app">
            <button className="botaoPerfil--app" onClick={Perfil}></button>
            <button className="botaoSair--app" onClick={Sair}>
              Sair
            </button>
          </div>
        </nav>
        <div className="boxTituloCabecalho--app">
          <h1 className="tituloCabecalho--app">Sala de Aula</h1>
        </div>
      </header>

      <main className="corpo--app">
        <h2 className="tituloCorpo--app">Aulas</h2>

        <div class="aulas--app">
          <div className="rolagem--app">
            <button className="seta--app direita--app">&lt;</button>
          </div>
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
          <div className="rolagem--app">
            <button className="seta--app esquerda">&gt;</button>
          </div>
          {/** vai direto pra plataforma de jogo escolhido*/}
        </div>

        <h2 className="tituloCorpo--app">Dicas</h2>
        <div className="aulas--app">
          <div className="rolagem--app">
            <button class="seta--app direita--app">&lt;</button>
          </div>
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src={programacao_1} alt="" />
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
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
          {/** vai direto pra plataforma de jogo escolhido*/}
          <div className="rolagem--app">
            <button class="seta--app esquerda">&gt;</button>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
