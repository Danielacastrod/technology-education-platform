import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Header } from "../../StylesGlobal/Header/Header";
import NavType2 from "../../StylesGlobal/Header/NavType2";
import { TitleHeader } from "../../StylesGlobal/Header/TitleHeader";
import { Main } from "../../StylesGlobal/CorpoApp/Main";
import { Title } from "../../StylesGlobal/CorpoApp/Title";
import { Container } from "../../StylesGlobal/CorpoApp/Container";
import { Carrossel } from "../../StylesGlobal/CorpoApp/Carrossel";
import { BotaoAula } from "../../StylesGlobal/CorpoApp/BotaoAula";
import { SetaEsquerda } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaEsquerda";
import { SetaDireita } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaDireita";

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

      <Main>
        <Title>Aulas</Title>

        <Container>
          <SetaEsquerda
            className="seta--app esquerda--app"
            onClick={handleEsquerdaClick1}
          ></SetaEsquerda>
          <Carrossel ref={carrossel1}>
            <BotaoAula onClick={Curso}>
              <img
                className="imagemAula--app"
                src={aulaLogica_1}
                alt="Lógica de Programação - 1"
              />
              <div>
                <p>Lógica de Programação - 1</p>
              </div>
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img
                className="imagemAula--app"
                src={aulaLogica_2}
                alt="Lógica de Programação - 2"
              />
              <div>
                <p>Lógica de Programação - 2</p>
              </div>
            </BotaoAula>{" "}
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img
                class="imagemAula--app"
                src={aulaPython_1}
                alt="Primeiros passos com Python"
              />
              <div>
                <p>Primeiros passos com Python</p>
              </div>
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img
                class="imagemAula--app"
                src={aulaPython_2}
                alt="Criando jogos com Python"
              />
              <div>
                <p>Criando jogos com Python</p>
              </div>
            </BotaoAula>
          </Carrossel>
          <SetaDireita
            className="seta--app direita--app"
            onClick={handleDireitaClick1}
          ></SetaDireita>
          {/** vai direto pra plataforma de jogo escolhido*/}
        </Container>

        <Title>Dicas</Title>
        <Container>
          <SetaEsquerda
            className="seta--app esquerda--app"
            onClick={handleEsquerdaClick2}
          ></SetaEsquerda>
          <Carrossel ref={carrossel2}>
            <BotaoAula onClick={Dicas}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Dicas}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </BotaoAula>
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </BotaoAula>
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={programacao_1} alt="" />
            </BotaoAula>
            {/** vai direto pra plataforma de jogo escolhido*/}
            <BotaoAula onClick={Curso}>
              <img class="imagemAula--app" src={html_1} alt="" />
            </BotaoAula>
          </Carrossel>
          {/** vai direto pra plataforma de jogo escolhido*/}
          <SetaDireita
            className="seta--app direita--app"
            onClick={handleDireitaClick2}
          ></SetaDireita>
        </Container>
      </Main>

      <Rodape />
    </div>
  );
}
