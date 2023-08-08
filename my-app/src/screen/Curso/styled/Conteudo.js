import styled from "styled-components";

export const Conteudo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;
