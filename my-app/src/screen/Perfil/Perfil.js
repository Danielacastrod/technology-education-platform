import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { AES } from "crypto-js";
import { enc } from "crypto-js";

import { Container } from "../../StylesGlobal/Container/Container";
import { StyledHeader } from "./styled/Header";
import NavType1 from "../../StylesGlobal/Header/NavType1";
import { Box } from "../../StylesGlobal/Acesso/BoxAcesso/Box";
import { BoxTransparente } from "../../StylesGlobal/Acesso/BoxTransparenteAcesso/BoxTransparente";
import { TitleForm } from "../../StylesGlobal/Title/TitleForm";
import { ContainerUserData } from "./styled/ContainerUserData";
import { BoxUserData } from "./styled/BoxUserData";
import { NomeDados } from "./styled/NomeDados";
import { Dados } from "./styled/Dados";
import { Carregando } from "./styled/Carregando";

export default function Perfil() {
  const { c_emailresp_cont } = useParams();

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
          `https://api-rest-azure.vercel.app/cadastro?c_emailresp_cont=${decryptedEmail}`
          // `http://localhost:3000/cadastro?c_emailresp_cont=${decryptedEmail}`
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
    <Container>
      <StyledHeader>
        <NavType1 />
      </StyledHeader>
      <Box>
        <BoxTransparente>
          <TitleForm>Perfil do Usuário</TitleForm>
          {userData ? (
            <ContainerUserData>
              <BoxUserData>
                <NomeDados>Nome da Criança</NomeDados>
                <Dados>{userData.c_nomecria_cont}</Dados>
              </BoxUserData>
              <BoxUserData>
                <NomeDados>Data de Nascimento</NomeDados>
                <Dados>{userData.d_nasccria_cont}</Dados>
              </BoxUserData>
              <BoxUserData>
                <NomeDados>Nome do Responsável</NomeDados>
                <Dados>{userData.c_nomeresp_cont}</Dados>
              </BoxUserData>
              <BoxUserData>
                <NomeDados>E-mail do Responsável</NomeDados>
                <Dados>{userData.c_emailresp_cont}</Dados>
              </BoxUserData>
              <BoxUserData>
                <NomeDados>Senha</NomeDados>
                <Dados>{ocultarFrase(userData.c_senha_cont)}</Dados>
              </BoxUserData>
            </ContainerUserData>
          ) : (
            <Carregando>Carregando...</Carregando>
          )}
        </BoxTransparente>
      </Box>
    </Container>
  );
}
