import styled from "styled-components";

export const BoxLadoEsquerdo = styled.div`
  width: 25%;
  overflow: auto;
  height: 100%;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;
