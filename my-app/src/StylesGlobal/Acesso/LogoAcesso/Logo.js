import styled from "styled-components";

export const StyledLogo = styled.img`
  height: 110px;
  position: fixed;
  width: 110px;

  @media (max-width: 768px) {
    height: 115px;
    width: 115px;
  }

  @media (max-width: 430px) {
    height: 70px;
    width: 70px;
  }
`;
