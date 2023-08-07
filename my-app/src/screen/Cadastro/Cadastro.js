import React from "react";

import { Container } from "../../StylesGlobal/Container/Container";
import Header from "./styled/Header";
import { StyledBox } from "./styled/Box";
import { StyledBoxTrasnparente } from "./styled/BoxTranparente";
import { TitleForm } from "../../StylesGlobal/Title/TitleForm";
import Formulario from "./styled/Formulario";

export default function Cadastro() {
  /* O código abaixo é um trecho de código JSX escrito em JavaScript. Ele representa um formulário de registro para um site ou aplicativo. */
  return (
    <Container>
      <Header />
      <StyledBox>
        <StyledBoxTrasnparente>
          <TitleForm>Cadastro</TitleForm>
          <Formulario />
        </StyledBoxTrasnparente>
      </StyledBox>
    </Container>
  );
}
