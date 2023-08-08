import React, { useRef } from "react";

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
import programacao_2 from "../img/programacao_2.png";
import programacao_3 from "../img/programacao_3.png";
import programacao_4 from "../img/programacao_4.png";
import programacao_5 from "../img/programacao_5.png";

export default function Dicas() {
  const carrossel = useRef(null);

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
          <SetaEsquerda onClick={handleEsquerdaClick}></SetaEsquerda>
          <Carrossel ref={carrossel}>
            <BotaoAula>
              <img className="imagemAula--app" src={programacao_1} alt="" />
            </BotaoAula>
            <BotaoAula>
              <img className="imagemAula--app" src={programacao_2} alt="" />
            </BotaoAula>
            <BotaoAula>
              <img className="imagemAula--app" src={programacao_3} alt="" />
            </BotaoAula>
            <BotaoAula>
              <img className="imagemAula--app" src={programacao_4} alt="" />
            </BotaoAula>
            <BotaoAula>
              <img className="imagemAula--app" src={programacao_5} alt="" />
            </BotaoAula>
          </Carrossel>
          <SetaDireita onClick={handleDireitaClick}></SetaDireita>
        </Container>
      </Main>
      <Rodape />
    </div>
  );
}
