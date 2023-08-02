import "../App.css";
import React from "react";
//import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <h2>Sala de aula</h2>
      <div className="saladeaula">
        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 3° ano</a></button>

        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 4° ano</a></button>

        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 5° ano</a></button> 

        
        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 6° ano</a></button>

        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 7° ano</a></button>
        
        <button className="serie">
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 8° ano</a></button>

          <button className="serie">    
        <a className="nomeSerie" href="file:///C:/Users/Rede2102/Desktop/sala%20de%20aula%20DevPro/index.html"> 9° ano</a></button>
       
     </div>

        <h2>Comece por Aqui</h2>
        <div className="jogo1">
            
            <div className="rolagem"><button className="seta direita">&lt;</button></div>

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 19.png" alt="https://studio.code.org/s/express-2023/lessons/2/levels/1?redirect_warning=true"/>
              <a className="linkJogo" href="https://studio.code.org/s/express-2023/lessons/2/levels/1?redirect_warning=true">Depurando no labirinto</a></button> {/*vai direto pra plataforma de jogo escolhido */}

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 20 (1).png" alt="https://flukeout.github.io/"/>
              <a className="linkJogo" href="https://flukeout.github.io/">CSS Dinner</a></button>  {/* vai direto pra plataforma de jogo escolhido */}

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 51.png" alt="http://robozzle.com/js/index.aspx"/>
              <a className="linkJogo" href="http://robozzle.com/js/index.aspx">RoboZZle</a></button> {/* vai direto pra plataforma de jogo escolhido */} 

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 19 (1).png" alt="https://play.elevatorsaga.com/"/>
              <a className="linkJogo" href="https://play.elevatorsaga.com/">Criando arte com código</a></button> {/*vai direto pra plataforma de jogo escolhido */} 

             <div className="rolagem"><button className="seta esquerda">&gt;</button> </div>
           </div>

           <h2>Aprenda css jogando</h2>
           <div className="jogo1">

              <div className="rolagem"><button className="seta direita">&lt;</button></div>

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 50.png" alt="https://studio.code.org/s/express-2023/lessons/1/levels/1?redirect_warning=true"/>
              <a className="linkJogo" href="https://studio.code.org/s/express-2023/lessons/1/levels/1?redirect_warning=true">Programação com Angry Birds</a></button> {/*vai direto pra plataforma de jogo escolhido*/}  
            
              <button className="botaoJogo">
              <img class="imgJog" src="img/image 52.png" alt="https://blockly.games/"/>
              <a className="linkJogo" href="https://blockly.games/">Blockly Games</a></button> {/*vai direto pra plataforma de jogo escolhido*/}
            
              <button className="botaoJogo">
              <img className="imgJog" src="img/image 19 (2).png " alt="https://flexboxfroggy.com/"/>
              <a className="linkJogo" href="https://flexboxfroggy.com/">Flexbox Froggy</a></button> {/*vai direto pra plataforma de jogo escolhido*/} 

              <button className="botaoJogo">
              <img className="imgJog" src="img/image 53.png" alt="https://studio.code.org/s/coursec-2023/lessons/6/levels/1?redirect_warning=true"/>
              <a className="linkJogo" href="https://studio.code.org/s/coursec-2023/lessons/6/levels/1?redirect_warning=true">Criando arte com código</a></button> {/*  vai direto pra plataforma de jogo escolhido*/} 
            
            <div className="rolagem"> <button className="seta esquerda">&gt;</button></div>
           </div>
          

      <button className="button" onClick={Perfil}>
        Perfil
      </button>

      <button className="button" onClick={Sair}>
        Sair da Conta
      </button>

      <button className="button" onClick={SalaDeAula}>
        Sala de Aula
      </button>
    </div>
  );
}
