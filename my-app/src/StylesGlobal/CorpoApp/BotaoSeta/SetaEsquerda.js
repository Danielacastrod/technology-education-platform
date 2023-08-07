import styled from "styled-components";
import setaEsquerda from "../../../screen/img/angulo-esquerdo.png";

export const SetaEsquerda = styled.button`
  background: url(${setaEsquerda}) no-repeat center / cover;
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
