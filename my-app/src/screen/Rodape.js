import "../App.css";
import React from "react";
import logo from "./img/logo-developer-kids.png";

export default function Rodape() {
  return (
    <div>
      <footer className="rodape">
        <div className="boxRodape">
          <div className="boxContato">
            <img src={logo} alt="Logo Developer Kids" className="logoRodape" />
            <a href="mailto:contato_developerkids@gmail.com" className="link">
              contato_developerkids@gmail.com
            </a>
          </div>

          <div className="boxRedes">
            <div className="boxRedesSociais">
              <button className="redesSociais instagram"></button>
              <button className="redesSociais facebook"></button>
              <button className="redesSociais twitter"></button>
              <button className="redesSociais linkedin"></button>
            </div>
            <a href="/termosecondicoes" target="_blank" className="link">
              Termos e Condições
            </a>
          </div>
        </div>

        <div className="boxCopyRodape">
          <p>
            Copyright &copy; 2023 Star Dance -{" "}
            <a href="/politicadeprivacidade" target="_blank" className="link">
              Política de Privacidade
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
