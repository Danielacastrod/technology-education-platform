import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 6rem;
  margin-bottom: 3rem;
  background-color: transparent;

  img {
    height: 150px;
    width: auto;
  }

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 430px) {
    height: 100px;

    img {
      height: 100px;
    }
  }
`;
