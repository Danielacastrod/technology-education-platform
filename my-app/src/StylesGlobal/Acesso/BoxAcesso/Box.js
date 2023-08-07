import styled from "styled-components";

export const Box = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
