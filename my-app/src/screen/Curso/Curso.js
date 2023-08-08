import React, { useState } from "react";
import YouTube from "react-youtube";

import { Container } from "./styled/Container";
import { Header } from "./styled/Header";
import NavType2 from "../../StylesGlobal/Header/NavType2";
import { Main } from "./styled/Main";
import { Conteudo } from "./styled/Conteudo";
import { BoxLadoEsquerdo } from "./styled/BoxLadoEsquerdo";

import { BoxLadoDireito } from "./styled/LadoDireito/BoxLadoDireito";
import { ContainerVideo } from "./styled/LadoDireito/ContainerVideo";
import { Youtube } from "./styled/LadoDireito/Youtube";
import { BoxTitle } from "./styled/LadoDireito/BoxTitle";
import { BotaoNulo } from "./styled/LadoDireito/BotaoNulo";
import { SetaEsquerda } from "./styled/LadoDireito/SetaEsquerda";
import { SetaDireita } from "./styled/LadoDireito/SetaDireita";
import { LinkJogo } from "./styled/LadoDireito/LinkJogo";
import { CargoBot } from "./styled/LadoDireito/CargoBot";
import { Doodle } from "./styled/LadoDireito/Doodle";
import { Tetris } from "./styled/LadoDireito/Tetris";

export default function Curso() {
  const telas = [
    "Tela1",
    "Tela2",
    "Tela3",
    "Tela4",
    "Tela5",
    "Tela6",
    "Tela7",
    // "Tela8",
    // "Tela9",
    // "Tela10",
  ];

  const [telaAtual, setTelaAtual] = useState("Tela1");

  const handleTrocarTela = (tela) => {
    setTelaAtual(tela);
  };

  /* A função 'handleVoltar' é usada para navegar para a tela anterior em uma lista de telas. */
  const handleVoltar = () => {
    const telaAtualIndex = telas.indexOf(telaAtual);
    if (telaAtualIndex > 0) {
      const novaTela = telas[telaAtualIndex - 1];
      setTelaAtual(novaTela);
    }
  };

  /* A função 'handleAvancar' avança para a próxima tela se houver uma disponível. */
  const handleAvancar = () => {
    const telaAtualIndex = telas.indexOf(telaAtual);
    if (telaAtualIndex < telas.length - 1) {
      const novaTela = telas[telaAtualIndex + 1];
      setTelaAtual(novaTela);
    }
  };

  return (
    <Container>
      <Header>
        <NavType2 />
      </Header>
      <Main>
        <Conteudo>
          <BoxLadoEsquerdo>
            <LadoEsquerdo
              onTrocarTela={handleTrocarTela}
              telaAtual={telaAtual}
            />
          </BoxLadoEsquerdo>
          <LadoDireito
            telaAtual={telaAtual}
            onVoltar={handleVoltar}
            onAvancar={handleAvancar}
          />
        </Conteudo>
      </Main>
    </Container>
  );
}

const LadoEsquerdo = ({ onTrocarTela, telaAtual }) => {
  const handleClick = (tela) => {
    onTrocarTela(tela);
  };

  return (
    <div className="container--aula">
      <div className="boxTitulo--aula">
        <h2 className="titulo--aula">Curso de Lógica 1</h2>
      </div>
      <div className="botoes--aula">
        <button
          onClick={() => handleClick("Tela1")}
          className={
            telaAtual === "Tela1" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 1 - Iniciando a Lógica
        </button>

        <button
          onClick={() => handleClick("Tela2")}
          className={
            telaAtual === "Tela2" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 2 - Conceitos Básicos - Parte 1
        </button>

        <button
          onClick={() => handleClick("Tela3")}
          className={
            telaAtual === "Tela3" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 3 - Conceitos Básicos - Parte 2
        </button>

        <button
          onClick={() => handleClick("Tela4")}
          className={
            telaAtual === "Tela4" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 4 - Jogo Cargo-Bot
        </button>

        <button
          onClick={() => handleClick("Tela5")}
          className={
            telaAtual === "Tela5" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 5 - Jogo Doodle do google
        </button>

        <button
          onClick={() => handleClick("Tela6")}
          className={
            telaAtual === "Tela6" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Aula 6 - Jogo Tetris
        </button>

        <button
          onClick={() => handleClick("Tela7")}
          className={
            telaAtual === "Tela7" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Avaliação de Lógica - 1
        </button>

        {/* <button
          onClick={() => handleClick("Tela8")}
          className={
            telaAtual === "Tela8" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Tela 8
        </button>

        <button
          onClick={() => handleClick("Tela9")}
          className={
            telaAtual === "Tela9" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Tela 9
        </button>

        <button
          onClick={() => handleClick("Tela10")}
          className={
            telaAtual === "Tela10" ? "botao--aula botao-ativo" : "botao--aula"
          }
        >
          Tela 10
        </button> */}
      </div>
    </div>
  );
};

const Tela1 = ({ onVoltar, onAvancar }) => {
  const videoId = "3U9k-4ihjSw"; // ID do vídeo incorporado

  const opts = {
    width: "210%",
    height: "100%",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <ContainerVideo>
      <Youtube>
        <YouTube videoId={videoId} opts={opts} />
      </Youtube>
      <BoxTitle>
        <BotaoNulo style={{ backgroundColor: "#797979" }}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 1 - Iniciando a Lógica</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const Tela2 = ({ onVoltar, onAvancar }) => {
  const videoId = "tRcr4vtV-4o"; // ID do vídeo incorporado

  const opts = {
    width: "210%",
    height: "100%",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <ContainerVideo>
      <Youtube>
        <YouTube videoId={videoId} opts={opts} />
      </Youtube>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 2 - Conceitos Básicos - Parte 1</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const Tela3 = ({ onVoltar, onAvancar }) => {
  const videoId = "CANYM34cIuQ"; // ID do vídeo incorporado

  const opts = {
    width: "210%",
    height: "100%",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <ContainerVideo>
      <Youtube>
        <YouTube videoId={videoId} opts={opts} />
      </Youtube>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 3 - Conceitos Básicos - Parte 2</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};
const Tela4 = ({ onVoltar, onAvancar }) => {
  return (
    <ContainerVideo>
      <LinkJogo
        href="https://i4ds.github.io/CargoBot/?state=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CargoBot>
          <div>
            Clique Aqui <br /> Para Jogar
          </div>
        </CargoBot>
      </LinkJogo>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 4 - Jogo Cargo-Bot</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const Tela5 = ({ onVoltar, onAvancar }) => {
  return (
    <ContainerVideo>
      <LinkJogo
        href="https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=pt-BR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Doodle>
          <div>
            Clique Aqui <br /> Para Jogar
          </div>
        </Doodle>
      </LinkJogo>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 5 - Jogo Doodle do google</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const Tela6 = ({ onVoltar, onAvancar }) => {
  return (
    <ContainerVideo>
      <LinkJogo
        href="https://tetris.com/play-tetris"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tetris>
          <div>
            Clique Aqui <br /> Para Jogar
          </div>
        </Tetris>
      </LinkJogo>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Aula 6 - Jogo Tetris</h2>
        <button onClick={onAvancar}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const Tela7 = ({ onVoltar, onAvancar }) => {
  return (
    <ContainerVideo>
      <LinkJogo
        href="https://tetris.com/play-tetris"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tetris>
          <div>
            Clique Aqui <br /> Para Jogar
          </div>
        </Tetris>
      </LinkJogo>
      <BoxTitle>
        <BotaoNulo onClick={onVoltar}>
          <SetaEsquerda></SetaEsquerda> Aula Anterior
        </BotaoNulo>
        <h2>Avaliação de Lógica - 1</h2>
        <button style={{ backgroundColor: "#797979" }}>
          Próxima Aula <SetaDireita></SetaDireita>
        </button>
      </BoxTitle>
    </ContainerVideo>
  );
};

const LadoDireito = ({ telaAtual, onVoltar, onAvancar }) => {
  return (
    <BoxLadoDireito>
      {telaAtual === "Tela1" && (
        <Tela1 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela2" && (
        <Tela2 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela3" && (
        <Tela3 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela4" && (
        <Tela4 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela5" && (
        <Tela5 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela6" && (
        <Tela6 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
      {telaAtual === "Tela7" && (
        <Tela7 onVoltar={onVoltar} onAvancar={onAvancar} />
      )}
    </BoxLadoDireito>
  );
};
