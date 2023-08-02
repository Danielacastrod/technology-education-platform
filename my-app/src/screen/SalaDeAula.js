import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <header className="cabecalho"> {/**cabeçalho */}
        <div className="box3" >
           <a href="logo"><img src="img/logo DevPro.png" alt="" className="logo"/></a>{/** <!--Logo-->*/}
            <div className="box4">{/**<!-- Botão Modo carreira--> */}
                <div className="home">
                 <a  href="Inicio"><img src="img/botao-de-inicio 1.png" alt=""/></a>{/**<!--Logo-->   */}
                </div>
            <a href="perfil"><button className="perfil"><img src="img/Group 22.png" alt="perfil"/></button></a>{/**<!--Botão perfil do usúario--> */}
            </div>
        </div>
       <h1>Sala de aula</h1>
    </header>
    <main>
        <h2>Aulas</h2>

        <div class="aula1">
            <div className="rolagem"><button className="seta direita">&lt;</button></div>
            <button className="botaoaula"><img className="imgaula" src="img/image 49.png" alt=""/>
            <a className="linkaula" href="aula logica de programação">Lógica de Programação</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
           
            <button className="botaoaula"><img className="imgaula" src="img/Group 30.png" alt=""/>
            <a className="linkaula" href="jogo html e css">Aprenda HTML e CSS de forma divertida</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
           
            <button className="botaoaula"><img class="imgaula" src="img/image 22 (2).png"/>
            <a className="linkaula" href="jogo html e css"> HTML e CSS</a></button>{/** vai direto pra plataforma de jogo escolhido*/} 
            
            <button className="botaoaula"><img class="imgaula" src="img/image 25.png" alt=""/>
            <a className="linkaula" href="aula aula html,css e javaScript ">HTML, CSS e JavaScript</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
        </div>

        <h2>Dicas</h2>
        <div className="aula1">
            <div className="rolagem"><button class="seta direita">&lt;</button></div>

            <button className="botaoaula"><img class="imgaula" src="img/js.png" alt=""/>
            <a className="linkaula" href="JavaScript">JavaScript</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
            
            <button className="botaoaula"><img class="imgaula" src="img/image 24.png" alt=""/>
            <a className="linkaula" href="aula pyhon">Python</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
            
            <button className="botaoaula"><img className="imgaula" src="img/java.png" alt=""/>
            <a className="linkaula" href="aula java">Java</a></button>{/** vai direto pra plataforma de jogo escolhido*/} 
            
            <button className="botaoaula"><img class="imgaula" src="img/image 20 (2).png" alt=""/>
            <a className="linkaula" href="aula c#">C#</a></button> {/** vai direto pra plataforma de jogo escolhido*/} 
           
            <div className="rolagem"> <button class="seta esquerda">&gt;</button></div>
        </div>
       
    
       
    </main>

      <button className="button" onClick={Inicio}>
        Voltar
      </button>

      <button className="button" onClick={Inicio}>
        Home
      </button>

      <button className="button" onClick={Perfil}>
        Perfil
      </button>

      <button className="button" onClick={Sair}>
        Sair da Conta
      </button>

      <button className="button" onClick={Curso}>
        Curso
      </button>
    </div>
  );
}
