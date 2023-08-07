import styled from "styled-components";

export const StyledBoxTrasnparente = styled.div`
  align-items: center;
  background: rgba(28, 28, 28, 0.75);
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-size: 17px;
  font-weight: 400;
  height: 38rem;
  padding: 0;
  position: absolute;
  width: 639px;

  @media (max-width: 768px) {
    height: 33rem;
    padding: 0.3rem 0;
    width: 520px;
  }

  @media (max-width: 430px) {
    height: 29rem;
    padding: 1rem 0;
    width: 305px;
  }
`;
