import styled from "styled-components";

export const Youtube = styled.div`
  display: flex;
  width: 672px;
  height: 378px;
  margin-left: 3rem;

  @media (max-width: 768px) {
    height: 258px;
    width: 212px;
    margin-left: -14rem;
  }

  @media (max-width: 430px) {
    height: 198px;
    width: 169px;
    justify-content: center;
    margin-left: -11.5rem;
  }
`;
