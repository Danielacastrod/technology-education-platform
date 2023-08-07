import styled from "styled-components";
import anguloEsquerdoPreto from "../../screen/img/angulo-esquerdo-preto.png";

export const BotaoVoltar = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #dbdbdb;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  justify-content: center;

  div {
    background: url(${anguloEsquerdoPreto}) no-repeat center / cover;
    height: 40px;
    width: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    border: none;
    background-color: #dbdbdb;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    justify-content: center;

    div {
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: 430px) {
    height: 30px;
    width: 30px;

    div {
      height: 20px;
      width: 20px;
    }
  }
`;
