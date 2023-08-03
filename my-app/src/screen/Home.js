import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rodape from "./Rodape";
import jogo_doodle from "./img/jogo_doodle.png";
import jogo_tetris from "./img/jogo_tetris.png";
import jogo_cargoBot from "./img/jogo_cargoBot.png";
import jogo_scratch from "./img/jogo_scratch.png";
import jogo_flexboxFroggy from "./img/jogo_flexboxFroggy.png";
import jogo_gridGarden from "./img/jogo_gridGarden.png";
import jogo_cssDiner from "./img/jogo_cssDiner.png";
import jogo_flexboxDefense from "./img/jogo_flexboxDefense.png";

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
      <header className="cabecalho--app">
        <nav className="navegacaoCabecalho--app">
          <button className="logoInicio--app"></button>
          <div className="boxCabecalho--app">
            <button className="botaoPerfil--app" onClick={Perfil}></button>
            <button className="botaoSair--app" onClick={Sair}>
              Sair
            </button>
          </div>
        </nav>
        <div className="boxTituloCabecalho--app">
          <h1 className="tituloCabecalho--app">Aprenda jogando</h1>
        </div>
      </header>

      <main className="corpo--app">
        <h2 className="tituloCorpo--app">Sala de aula</h2>
        <div className="saladeaula--app">
          <button className="serie--app" onClick={SalaDeAula}>
            3° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            4° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            5° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            6° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            7° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            8° ano
          </button>
          <button className="serie--app" onClick={SalaDeAula}>
            9° ano
          </button>
        </div>

        <h2 className="tituloCorpo--app">Comece por Aqui</h2>
        <div className="jogos--app">
          <div className="rolagem--app">
            <button className="seta--app direita">&lt;</button>
          </div>
          <a
            href="https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=pt-BR"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_doodle}
                alt="Jogo Doodle do Google"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Doodle do Google</p>
              </div>
            </button>
          </a>
          {/*vai direto pra plataforma de jogo escolhido */}
          <a
            href="https://tetris.com/play-tetris"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img className="imagemJogo--app" src={jogo_tetris} alt="Tetris" />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Tetris</p>
              </div>
            </button>
          </a>
          {/* vai direto pra plataforma de jogo escolhido */}
          <a
            href="https://i4ds.github.io/CargoBot/?state=1"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_cargoBot}
                alt="Cargo Bot"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Cargo Bot</p>
              </div>
            </button>
          </a>
          {/* vai direto pra plataforma de jogo escolhido */}
          <a
            href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_scratch}
                alt="Scratch"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Scratch</p>
              </div>
            </button>
          </a>
          {/*vai direto pra plataforma de jogo escolhido */}
          <div className="rolagem--app">
            <button className="seta--app esquerda--app">&gt;</button>
          </div>
        </div>

        <h2 className="tituloCorpo--app">Aprenda css jogando</h2>
        <div className="jogos--app">
          <div className="rolagem--app">
            <button className="seta--app direita">&lt;</button>
          </div>
          <a
            href="https://flexboxfroggy.com/"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_flexboxFroggy}
                alt="Flexbox Froggy"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Flexbox Froggy</p>
              </div>
            </button>
          </a>
          {/*vai direto pra plataforma de jogo escolhido*/}
          <a
            href="https://cssgridgarden.com/"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                class="imagemJogo--app"
                src={jogo_gridGarden}
                alt="Grid Garden"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Grid Garden</p>
              </div>
            </button>
          </a>
          {/*vai direto pra plataforma de jogo escolhido*/}
          <a
            href="https://flukeout.github.io/"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_cssDiner}
                alt="CSS Diner"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">CSS Diner</p>
              </div>
            </button>
          </a>
          {/*vai direto pra plataforma de jogo escolhido*/}
          <a
            href="http://www.flexboxdefense.com/?utm_source=gabcodes&utm_medium=Pingback"
            target="blank"
            className="link--app"
          >
            <button className="botaoJogo--app">
              <img
                className="imagemJogo--app"
                src={jogo_flexboxDefense}
                alt="Flexbox Defense"
              />
              <div className="boxNomeJogo--app">
                <p className="nomeJogo--app">Flexbox Defense</p>
              </div>
            </button>
          </a>
          {/*  vai direto pra plataforma de jogo escolhido*/}
          <div className="rolagem--app">
            <button className="seta--app esquerda--app">&gt;</button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}
