import styled from "styled-components";

export const BoxTransparente = styled.div`
  align-items: center;
  background: rgba(28, 28, 28, 0.75);
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 400;
  height: 484px;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: absolute;
  width: 639px;

  @media (max-width: 768px) {
    height: 424px;
    margin-bottom: -6rem;
    padding-top: 0;
    width: 589px;
  }

  @media (max-width: 430px) {
    margin-bottom: 0;
    border-radius: 20px;
    font-size: 17px;
    height: 22rem;
    width: 305px;
  }
`;
