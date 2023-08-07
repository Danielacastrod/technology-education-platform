import React from "react";
import logo from "../img/logo-developer-kids.png";

import { Container } from "../../StylesGlobal/Container/Container";
import { TitleForm } from "../../StylesGlobal/Title/TitleForm";
import { StyledLogo } from "../../StylesGlobal/Acesso/LogoAcesso/Logo";
import { Box } from "../../StylesGlobal/Acesso/BoxAcesso/Box";
import { BoxTransparente } from "../../StylesGlobal/Acesso/BoxTransparenteAcesso/BoxTransparente";
import Formulario from "./styled/Formulario";
import Caminhos from "./styled/Caminhos";

export default function Login() {
  return (
    <Container>
      <StyledLogo src={logo} alt="Logo DevPro" />
      <Box>
        <BoxTransparente>
          <TitleForm>Entrar</TitleForm>
          <Formulario />

          <Caminhos />
        </BoxTransparente>
      </Box>
    </Container>
  );
}
