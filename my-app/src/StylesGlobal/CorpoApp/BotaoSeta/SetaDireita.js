import styled from "styled-components";
import setaDireita from "../../../screen/img/angulo-direito.png";

export const SetaDireita = styled.button`
  background: url(${setaDireita}) no-repeat center / cover;
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
