import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Header } from "../../StylesGlobal/Header/Header";
import NavType2 from "../../StylesGlobal/Header/NavType2";
import { TitleHeader } from "../../StylesGlobal/Header/TitleHeader";
import { Main } from "../../StylesGlobal/CorpoApp/Main";
import { Container } from "../../StylesGlobal/CorpoApp/Container";
import { Carrossel } from "../../StylesGlobal/CorpoApp/Carrossel";
import { BotaoAula } from "../../StylesGlobal/CorpoApp/BotaoAula";
import { SetaEsquerda } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaEsquerda";
import { SetaDireita } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaDireita";
import Rodape from "../../StylesGlobal/Rodape/Rodape";

import programacao_1 from "../img/programacao_1.png";
import html_1 from "../img/html_1.png";

export default function Dicas() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  const carrossel = useRef(null);

  const encodedEncryptedEmail = encodeURIComponent(c_emailresp_cont);

  function Curso() {
    navigate(`/curso/${encodedEncryptedEmail}`);
  }

  function Dicas() {
    navigate(`/dicas/${encodedEncryptedEmail}`);
  }

  const handleEsquerdaClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };
  const handleDireitaClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  return (
    <div>
      <Header>
        <NavType2 />
        <TitleHeader>
          <h1>Dicas</h1>
        </TitleHeader>
      </Header>
      <Main>
        <Container>
          <SetaEsquerda
            className="seta--app esquerda--app"
            onClick={handleEsquerdaClick}
          ></SetaEsquerda>
          <Carrossel ref={carrossel}>
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
            onClick={handleDireitaClick}
          ></SetaDireita>
        </Container>
      </Main>
      <Rodape />
    </div>
  );
}
