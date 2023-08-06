import "../App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AES } from "crypto-js";
import { enc } from "crypto-js";

export default function Perfil() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  function Home() {
    navigate(`/home/${c_emailresp_cont}`);
  }

  function Sair() {
    navigate("/");
  }

  const [userData, setUserData] = useState(null);

  const decryptEmail = (encryptedEmail, secretKey) => {
    const decryptedEmail = AES.decrypt(encryptedEmail, secretKey).toString(
      enc.Utf8
    );
    return decryptedEmail;
  };

  useEffect(() => {
    const decryptedEmail = decryptEmail(c_emailresp_cont, "chave_secreta");

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:3000/cadastro?c_emailresp_cont=${decryptedEmail}`
        );

        if (response.data[0]) {
          const user = response.data[0];
          setUserData(user); // Atualiza o estado userData com os dados do perfil
          const formattedDate = formatDate(user.d_nasccria_cont);
          setUserData({ ...user, d_nasccria_cont: formattedDate });
        }
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData(); // Chama a função fetchData para buscar os dados
  }, [c_emailresp_cont]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

  function ocultarFrase(frase) {
    return "•".repeat(frase.length);
  }

  // const senhaOculta = ocultarFrase(userData.c_senha_cont);

  return (
    <div className="container--perfil">
      <header className="cabecalho--perfil">
        <nav className="navegacaoCabecalho--app">
          <button className="logoInicio--app" onClick={Home}></button>
          <div className="boxCabecalho--app">
            <button className="botaoPerfil--app"></button>
            <button className="botaoSair--app" onClick={Sair}>
              Sair
            </button>
          </div>
        </nav>
      </header>
      <main className="box--acesso">
        <div className="boxTransparente--acesso">
          <h2 className="titulo--acesso">Perfil do Usuário</h2>
          {userData ? (
            <div className="containerUserData--perfil">
              <div className="boxUserData--perfil">
                <p className="tipoDado--perfil">Nome da Criança</p>
                <p className="dados--perfil">{userData.c_nomecria_cont}</p>
              </div>
              <div className="boxUserData--perfil">
                <p className="tipoDado--perfil">Data de Nascimento</p>
                <p className="dados--perfil">{userData.d_nasccria_cont}</p>
              </div>
              <div className="boxUserData--perfil">
                <p className="tipoDado--perfil">Nome do Responsável</p>
                <p className="dados--perfil">{userData.c_nomeresp_cont}</p>
              </div>
              <div className="boxUserData--perfil">
                <p className="tipoDado--perfil">E-mail do Responsável</p>
                <p className="dados--perfil">{userData.c_emailresp_cont}</p>
              </div>
              <div className="boxUserData--perfil">
                <p className="tipoDado--perfil">Senha</p>
                <p className="dados--perfil">
                  {ocultarFrase(userData.c_senha_cont)}
                </p>
              </div>
            </div>
          ) : (
            <p className="carregando">Carregando...</p>
          )}
        </div>
      </main>
    </div>
  );
}
