import styled from "styled-components";

export const TitleHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;

  h1 {
    color: #ffff;
    text-shadow: 5px 5px 0px #6100c0;
    font-size: 64px;
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
      width: 30rem;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 54px;
    }
  }
`;
