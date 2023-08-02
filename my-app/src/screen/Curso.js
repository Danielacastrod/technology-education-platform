import "../App.css";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import doodle_quest1 from "./img/doodle-quest1.png";
import doodle_quest2 from "./img/doodle-quest2.png";
import doodle_quest3 from "./img/doodle-quest3.png";
import comemoracao from "./img/comemoracao.png";
import tudoBem from "./img/tudoBem.png";
import duvida from "./img/duvida.png";

/**
Esta é uma função JavaScript que representa uma página de curso com botões de navegação e seções de conteúdo.
@returns A função 'Curso' está retornando elementos JSX, que representam a estrutura e o conteúdo do componente.
 */
export default function Curso() {
  /* O código abbaixo está usando atribuição de desestruturação para extrair a propriedade 'c_emailresp_cont' da função 'useParams()'. O valor de 'c_emailresp_cont' não é mostrado no trecho de código. */
  const { c_emailresp_cont } = useParams();

  /* A linha 'const navegar = useNavigate();' está usando o gancho 'useNavigate' da biblioteca 'react-router-dom' para obter a função 'navigate'. Esta função pode ser usada para navegar programaticamente para diferentes rotas no aplicativo. */
  const navigate = useNavigate();

  /* O código abaixo está declarando um array chamado "telas" que contém uma lista de strings representando diferentes telas ou páginas. A matriz inclui os nomes de 7 telas, "Tela1" a "Tela7". Também existem linhas comentadas que sugerem que pode haver telas adicionais, "Tela8" a "Tela10", mas atualmente não estão incluídas na matriz. */
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

  /* O código abaixo é escrito em JavaScript e está usando o hook useState do React. Ele declara uma variável de estado chamada "telaAtual" e uma função chamada "setTelaAtual" para atualizar o estado. O valor inicial de "telaAtual" é definido como "Tela1".
   */
  const [telaAtual, setTelaAtual] = useState("Tela1");

  /**
  A função "handleTrocarTela" configura a tela atual para a tela especificada.
  @param tela - O parâmetro "tela" representa a nova tela ou página para a qual você deseja alternar.
  */
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

  /* O código abaixo define três funções para navegar em diferentes páginas. */
  function Voltar() {
    navigate(`/saladeaula/${c_emailresp_cont}`);
  }

  function Inicio() {
    navigate(`/home/${c_emailresp_cont}`);
  }

  function Perfil() {
    navigate(`/perfil/${c_emailresp_cont}`);
  }

  // function Sair() {
  //   navigate("/");
  // }

  /* O código abaixo está renderizando um contêiner para uma página de curso com cabeçalho, navegação e conteúdo principal. */
  return (
    <div className="container--curso">
      <header className="cabecalho--curso">
        <nav className="navegacao--curso">
          <button className="botaoVoltar--curso" onClick={Voltar}>
            <div className="iconVoltar--curso"></div>Voltar
          </button>
          <button className="logoInicio--curso" onClick={Inicio}></button>
          <button className="botaoPerfil--curso" onClick={Perfil}></button>
        </nav>
      </header>
      <main className="corpo--curso">
        <div className="conteudo--curso">
          <div className="ladoEsquerdo--curso">
            <LadoEsquerdo
              onTrocarTela={handleTrocarTela}
              telaAtual={telaAtual}
            />
          </div>
          <LadoDireito
            telaAtual={telaAtual}
            onVoltar={handleVoltar}
            onAvancar={handleAvancar}
          />
        </div>
      </main>
    </div>
  );
}

/**
A função abaixo é um componente React que renderiza uma lista de botões para diferentes lições em um curso de lógica.
@returns O componente está retornando um div com um nome de classe "container--aula". Dentro do div, há outro div com o nome da classe "boxTitulo--aula" e um elemento h2 com o nome da classe "titulo--aula" e o texto "Curso de Lógica 1". Abaixo disso, há um div com o nome da classe "botoes--aula"
*/
const LadoEsquerdo = ({ onTrocarTela, telaAtual }) => {
  /**
  A função handleClick é utilizada para manipular um evento click e chamar a função onTrocarTela com um parâmetro especificado.
  @param tela - O parâmetro "tela" representa a tela ou página que será exibida ou alterada quando a função handleClick for chamada.
  */
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
    width: "672",
    height: "378",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <div className="boxVideo--aula">
      <div className="youtube-player--aula">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="boxTitulo--aula">
        <button className="aulaAnterior--aula botoesAula--aula aulaNulo--aula">
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 1 - Iniciando a Lógica</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

const Tela2 = ({ onVoltar, onAvancar }) => {
  const videoId = "tRcr4vtV-4o"; // ID do vídeo incorporado

  const opts = {
    width: "672",
    height: "378",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <div className="boxVideo--aula">
      <div className="youtube-player--aula">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 2 - Conceitos Básicos - Parte 1</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

const Tela3 = ({ onVoltar, onAvancar }) => {
  const videoId = "CANYM34cIuQ"; // ID do vídeo incorporado

  const opts = {
    width: "672",
    height: "378",
    playerVars: {
      autoplay: 0, // Não reproduzir automaticamente
      controls: 0, // Remover os controles do player do YouTube
    },
  };

  return (
    <div className="boxVideo--aula">
      <div className="youtube-player--aula">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 3 - Conceitos Básicos - Parte 2</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};
const Tela4 = ({ onVoltar, onAvancar }) => {
  return (
    <div className="boxVideo--aula">
      <a
        className="linkJogo--aula"
        href="https://i4ds.github.io/CargoBot/?state=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="imagem--aula cargoBot--aula">
          <div className="cliqueAqui--aula">
            Clique Aqui <br /> Para Jogar
          </div>
        </div>
      </a>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 4 - Jogo Cargo-Bot</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

const Tela5 = ({ onVoltar, onAvancar }) => {
  return (
    <div className="boxVideo--aula">
      <a
        className="linkJogo--aula"
        href="https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=pt-BR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="imagem--aula doodle--aula">
          <div className="cliqueAqui--aula">
            Clique Aqui <br /> Para Jogar
          </div>
        </div>
      </a>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 5 - Jogo Doodle do google</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

const Tela6 = ({ onVoltar, onAvancar }) => {
  return (
    <div className="boxVideo--aula">
      <a
        className="linkJogo--aula"
        href="https://tetris.com/play-tetris"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="imagem--aula tetris--aula">
          <div className="cliqueAqui--aula fundoPreto">
            Clique Aqui <br /> Para Jogar
          </div>
        </div>
      </a>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Aula 6 - Jogo Tetris</h2>
        <button
          onClick={onAvancar}
          className="proximaAula--aula botoesAula--aula"
        >
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

const Tela7 = ({ onVoltar, onAvancar }) => {
  const questions = [
    {
      id: 1,
      question: "Qual a melhor opção para o coelhinho pegar as duas cenouras?",
      image: doodle_quest1,
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      id: 2,
      question:
        "Qual a melhor opção para o coelhinho pegar as quatro cenouras?",
      image: doodle_quest2,
      options: ["1", "2", "3", "4"],
      correctAnswer: "4",
    },
    {
      id: 3,
      question:
        "Qual a melhor opção de repetição para o coelhinho pegar todas as cenouras?",
      image: doodle_quest3,
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const totalCorrectAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;

    const imageResult = () => {
      if (totalCorrectAnswers === 0) {
        const img = duvida;
        console.log("Que pena, não foi dessa vez");
        return img;
      } else if ((totalCorrectAnswers > 0) & (totalCorrectAnswers < 3)) {
        const img = tudoBem;
        console.log("Tente mais um pouco e você consegue!");
        return img;
      } else if (totalCorrectAnswers === 3) {
        const img = comemoracao;
        console.log("Parabéns, você conseguiu!!!");
        return img;
      }
    };

    const mensageResult = () => {
      if (totalCorrectAnswers === 0) {
        const msg = "Que pena, não foi dessa vez. Tente novamente!";
        return msg;
      } else if ((totalCorrectAnswers > 0) & (totalCorrectAnswers < 3)) {
        const msg = "Tente mais um pouco e você consegue!";
        return msg;
      } else if (totalCorrectAnswers === 3) {
        const msg = "Parabéns, você conseguiu!!!";
        return msg;
      }
    };

    return (
      <div className="boxQuestionario--aula">
        <div className="questionario--aula">
          <h2>Resultado</h2>
          <p className="resultado--aula">
            Você acertou {totalCorrectAnswers} de {questions.length} perguntas.
          </p>
          <img
            src={imageResult()}
            alt="Imagem resultado"
            className="imgResult--aula"
          />
          <p className="resultado--aula">{mensageResult()}</p>
          <button onClick={restartQuiz} className="opcao--aula">
            Reiniciar
          </button>
        </div>

        <div className="boxTitulo--aula">
          <button
            onClick={onVoltar}
            className="aulaAnterior--aula botoesAula--aula"
          >
            <div className="iconVoltar--aula"></div> Aula Anterior
          </button>
          <h2>Avaliação de Lógica - 1</h2>
          <button className="proximaAula--aula botoesAula--aula aulaNulo--aula">
            Próxima Aula <div className="iconProceguir--aula"></div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="boxQuestionario--aula">
      <div className="questionario--aula">
        <h2>Pergunta {currentQuestion + 1}</h2>
        <p className="questao--aula">{questions[currentQuestion].question}</p>
        <div className="boxImagemQuestionario--aula">
          <img
            src={questions[currentQuestion].image}
            alt={`Pergunta ${currentQuestion + 1}`}
            className="imagemQuestionario--aula"
          />
        </div>
        <ul className="listaOpcoes--aula">
          {questions[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="opcao--aula"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="boxTitulo--aula">
        <button
          onClick={onVoltar}
          className="aulaAnterior--aula botoesAula--aula"
        >
          <div className="iconVoltar--aula"></div> Aula Anterior
        </button>
        <h2>Avaliação de Lógica - 1</h2>
        <button className="proximaAula--aula botoesAula--aula aulaNulo--aula">
          Próxima Aula <div className="iconProceguir--aula"></div>
        </button>
      </div>
    </div>
  );
};

// const Tela8 = () => {
//   return <div>Tela 8 - Aula 8</div>;
// };

// const Tela9 = () => {
//   return <div>Tela 9 - Aula 9</div>;
// };
// const Tela10 = () => {
//   return <div>Tela 10 - Aula 10</div>;
// };

const LadoDireito = ({ telaAtual, onVoltar, onAvancar }) => {
  return (
    <div className="ladoDireito--curso">
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
      {/* {telaAtual === "Tela8" && <Tela8 />}
      {telaAtual === "Tela9" && <Tela9 />}
      {telaAtual === "Tela10" && <Tela10 />} */}
    </div>
  );
};
