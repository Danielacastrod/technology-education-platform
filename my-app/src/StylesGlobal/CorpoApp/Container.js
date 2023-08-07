import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 360px;
  width: 100%;

  @media (max-width: 768px) {
    height: 260px;
  }
`;
