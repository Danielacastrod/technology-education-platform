import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import NavType1 from "../../StylesGlobal/Header/NavType1";
import { Header } from "../../StylesGlobal/Header/Header";
import { TitleHeader } from "../../StylesGlobal/Header/TitleHeader";
import { Main } from "../../StylesGlobal/CorpoApp/Main";
import { Title } from "../../StylesGlobal/CorpoApp/Title";
import { StyledBoxSalaDeAula } from "./styled/BoxSalaDeAula";
import { Container } from "../../StylesGlobal/CorpoApp/Container";
import { Carrossel } from "../../StylesGlobal/CorpoApp/Carrossel";
import { BotaoAula } from "../../StylesGlobal/CorpoApp/BotaoAula";
import { SetaEsquerda } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaEsquerda";
import { SetaDireita } from "../../StylesGlobal/CorpoApp/BotaoSeta/SetaDireita";

import Rodape from "../../StylesGlobal/Rodape/Rodape";
import jogo_doodle from "../img/jogo_doodle.png";
import jogo_tetris from "../img/jogo_tetris.png";
import jogo_cargoBot from "../img/jogo_cargoBot.png";
import jogo_scratch from "../img/jogo_scratch.png";
import jogo_flexboxFroggy from "../img/jogo_flexboxFroggy.png";
import jogo_gridGarden from "../img/jogo_gridGarden.png";
import jogo_cssDiner from "../img/jogo_cssDiner.png";
import jogo_flexboxDefense from "../img/jogo_flexboxDefense.png";

export default function Home() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  const carrossel1 = useRef(null);
  const carrossel2 = useRef(null);

  const encodedEncryptedEmail = encodeURIComponent(c_emailresp_cont);

  function SalaDeAula() {
    navigate(`/saladeaula/${encodedEncryptedEmail}`);
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
        <NavType1 />
        <TitleHeader>
          <h1>Aprenda jogando</h1>
        </TitleHeader>
      </Header>

      <Main>
        <Title>Sala de aula</Title>
        {/* <Carrossel> */}
        <StyledBoxSalaDeAula>
          <button onClick={SalaDeAula}>3° ano</button>
          <button onClick={SalaDeAula}>4° ano</button>
          <button onClick={SalaDeAula}>5° ano</button>
          <button onClick={SalaDeAula}>6° ano</button>
          <button onClick={SalaDeAula}>7° ano</button>
          <button onClick={SalaDeAula}>8° ano</button>
          <button onClick={SalaDeAula}>9° ano</button>
        </StyledBoxSalaDeAula>
        {/* </Carrosskel> */}

        <Title>Comece por Aqui</Title>
        <Container>
          <SetaEsquerda
            onClick={handleEsquerdaClick1}
            className="seta--app esquerda--app"
          ></SetaEsquerda>

          <Carrossel ref={carrossel1}>
            <a
              href={`https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=pt-BR`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_doodle} alt="Jogo Doodle do Google" />

                <div>
                  <p>Doodle do Google</p>
                </div>
              </BotaoAula>
            </a>

            {/*vai direto pra plataforma de jogo escolhido */}
            <a
              href={`https://tetris.com/play-tetris`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_tetris} alt="Tetris" />
                <div>
                  <p>Tetris</p>
                </div>
              </BotaoAula>
            </a>
            {/* vai direto pra plataforma de jogo escolhido */}
            <a
              href={`https://i4ds.github.io/CargoBot/?state=1`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_cargoBot} alt="Cargo Bot" />
                <div>
                  <p>Cargo Bot</p>
                </div>
              </BotaoAula>
            </a>
            {/* vai direto pra plataforma de jogo escolhido */}
            <a
              href={`https://scratch.mit.edu/projects/editor/?tutorial=getStarted`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_scratch} alt="Scratch" />
                <div>
                  <p>Scratch</p>
                </div>
              </BotaoAula>
            </a>

            {/*vai direto pra plataforma de jogo escolhido */}
          </Carrossel>
          <SetaDireita
            onClick={handleDireitaClick1}
            className="seta--app direita--app"
          ></SetaDireita>
        </Container>

        <Title>Aprenda css jogando</Title>

        <Container>
          <SetaEsquerda
            onClick={handleEsquerdaClick2}
            className="seta--app esquerda--app"
          ></SetaEsquerda>
          <Carrossel ref={carrossel2}>
            <a
              href={`https://flexboxfroggy.com/`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_flexboxFroggy} alt="Flexbox Froggy" />
                <div>
                  <p>Flexbox Froggy</p>
                </div>
              </BotaoAula>
            </a>
            {/*vai direto pra plataforma de jogo escolhido*/}
            <a
              href={`https://cssgridgarden.com/`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img
                  class="imagemJogo--app"
                  src={jogo_gridGarden}
                  alt="Grid Garden"
                />
                <div>
                  <p>Grid Garden</p>
                </div>
              </BotaoAula>
            </a>
            {/*vai direto pra plataforma de jogo escolhido*/}
            <a
              href={`https://flukeout.github.io/`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_cssDiner} alt="CSS Diner" />
                <div>
                  <p>CSS Diner</p>
                </div>
              </BotaoAula>
            </a>
            {/*vai direto pra plataforma de jogo escolhido*/}
            <a
              href={`http://www.flexboxdefense.com/?utm_source=gabcodes&utm_medium=Pingback`}
              target="blank"
              className="link--app"
            >
              <BotaoAula>
                <img src={jogo_flexboxDefense} alt="Flexbox Defense" />
                <div>
                  <p>Flexbox Defense</p>
                </div>
              </BotaoAula>
            </a>

            {/*  vai direto pra plataforma de jogo escolhido*/}
          </Carrossel>
          <SetaDireita
            onClick={handleDireitaClick2}
            className="seta--app direita--app"
          ></SetaDireita>
        </Container>
      </Main>
      <Rodape />
    </div>
  );
}
