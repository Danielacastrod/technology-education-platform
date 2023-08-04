function Dicas(){
    return(
        <div>
<div className="cabecalho"> {/* cabeçalho */}
        <div className="box5" >
        <a className="saida" href="">
        <img src="img/angulo-esquerdo 4.png" alt=""/></a>
        <a href="logo">
        <img src="img/logo DevPro.png" alt="" className="logo"/></a> {/*<!--Logo--> */}
       
       <div className="box6">
       <a className="perfil" href="perfil">
       <img src="img/Group 22.png" alt="perfil"/></a> {/* <!--Botão perfil do usúario--> */}
       </div>
     
       </div>

   <H1>DICAS</H1>

   <div className="dica1">
    
   <div className="rolagem"> 
         <button className="seta direita">&lt;</button>
   </div>
   
     <a className="dica" href="">
     <img className="imgdica" src="img/html_1.png" alt=""/></a>
     <a className="dica" href="">
     <img className="imgdica" src="img/html_2.png" alt=""/></a>
     <a className="dica" href="">
     <img className="imgdica" src="img/html_1.png" alt=""/></a>
     <a className="dica" href="">
     <img className="imgdica" src="img/html_2.png" alt=""/></a>
     
     <div className="rolagem"> 
         <button className="seta esquerda">&gt;</button>
     </div>

        </div>        
    </div>      
  </div>
    )
}
export default Dicas