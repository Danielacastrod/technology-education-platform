import styled from "styled-components";
import capa from "../../img/capa.png";

export const Header = styled.header`
  align-items: center;
  background: url(${capa}) no-repeat center / cover;
  height: 10%;
  padding: 1rem 1rem 0 1rem;
  width: 100%;

  @media (max-width: 768px) {
    height: 7rem;
    padding: 1rem 1rem 0 1rem;
    width: 100%;
  }

  @media (max-width: 430px) {
    height: 5rem;
  }
`;
