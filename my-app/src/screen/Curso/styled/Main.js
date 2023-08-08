import styled from "styled-components";

export const Main = styled.main`
  background-color: #433e47;
  width: 100%;
  height: calc(100vh - 5.9rem);

  @media (max-width: 768px) {
    height: calc(100vh - 7rem);
  }

  @media (max-width: 430px) {
    height: calc(100vh - 5rem);
  }
`;
