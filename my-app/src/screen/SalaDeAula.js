import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Rodape";
import Rodape from "./Rodape";

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
          <div className="rolagem">
            <button className="seta direita">&lt;</button>
          </div>
          <button className="botaoAula--app" onClick={Curso}>
            <img className="imagemAula--app" src="img/image 49.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img className="imagemAula--app" src="img/Group 30.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>{" "}
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src="img/image22(2).png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src="img/image 25.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          <div className="rolagem">
            <button className="seta esquerda">&gt;</button>
          </div>
          {/** vai direto pra plataforma de jogo escolhido*/}
        </div>

        <h2 className="tituloCorpo--app">Dicas</h2>
        <div className="aulas--app">
          <div className="rolagem">
            <button class="seta direita">&lt;</button>
          </div>
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src="img/js.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src="img/image 24.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img className="imagemAula--app" src="img/java.png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <button className="botaoAula--app" onClick={Curso}>
            <img class="imagemAula--app" src="img/image 20 (2).png" alt="" />
            <div className="boxNomeAula--app">
              <p className="nomeAula--app">Lógica de Programação</p>
            </div>
          </button>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <div className="rolagem">
            <button class="seta esquerda">&gt;</button>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
