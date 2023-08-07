import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
    color: #000;
    font-size: 17px;
    font-weight: 700;
    height: 50px;
    text-align: center;
    width: 150px;
  }

  @media (max-width: 768px) {
    button {
      border-radius: 15px;
      font-size: 13px;
      height: 42px;
      width: 110px;
    }
  }

  @media (max-width: 430px) {
    button {
      border-radius: 8px;
      font-size: 0.5rem;
      height: 2rem;
      width: 70px;
      font-weight: 900;
    }
  }
`;

export default function BoxBotao() {
  return (
    <StyledBox>
      <button type="submit">Entrar</button>
    </StyledBox>
  );
}
