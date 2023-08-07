import styled from "styled-components";

export const Carrossel = styled.div`
  max-width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;
