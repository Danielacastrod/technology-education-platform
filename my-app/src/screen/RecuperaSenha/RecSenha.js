import React from "react";
import logo from "../img/logo-developer-kids.png";
import chaves from "../img/chaves.png";

import { Container } from "../../StylesGlobal/Container/Container";
import { StyledLogo } from "../../StylesGlobal/Acesso/LogoAcesso/Logo";
import { Box } from "../../StylesGlobal/Acesso/BoxAcesso/Box";
import { BoxTransparente } from "../../StylesGlobal/Acesso/BoxTransparenteAcesso/BoxTransparente";
import { TitleForm } from "../../StylesGlobal/Title/TitleForm";
import { StyledImg } from "./styled/Img";
import Formulario from "./styled/Formulario";

export default function RecSenha({ navigation }) {
  return (
    <Container>
      <StyledLogo src={logo} alt="Logo DevPro" />
      <Box>
        <BoxTransparente>
          <TitleForm>Esqueceu a senha?</TitleForm>
          <StyledImg src={chaves} alt="Chaves" />
          <Formulario />
        </BoxTransparente>
      </Box>
    </Container>
  );
}
