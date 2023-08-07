import React from "react";
import styled from "styled-components";

const StyledBoxCaminhos = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  justify-content: space-between;
  margin-top: 2rem;
  text-align: center;

  a {
    color: #ffffff;
  }

  p {
    color: #ffffff;
  }

  @media (max-width: 430px) {
    font-size: 13px;
    height: 3rem;
    margin-top: 1rem;

    p {
      font-size: 13px;
    }
  }
`;

const StyeldCadastro = styled.a`
  margin-left: 0.3rem;
`;

export default function Caminhos() {
  return (
    <StyledBoxCaminhos>
      <a href="/recsenha">Esqueceu sua senha?</a>
      <p>
        Não possui uma conta?
        <StyeldCadastro href="/cadastro">Cadastre-se</StyeldCadastro>
      </p>
    </StyledBoxCaminhos>
  );
}
