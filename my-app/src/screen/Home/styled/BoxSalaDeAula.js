import styled from "styled-components";

export const StyledBoxSalaDeAula = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;

  button {
    width: 160px;
    height: 70px;
    background: #000000;
    border-radius: 20px;
    border: none;
    color: #6100c0;
    font-size: 17px;
    font-weight: bold;
    margin: 0 5px;
  }

  button:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    button {
      width: 90px;
      height: 50px;
      border-radius: 18px;
    }
  }

  @media (max-width: 430px) {
    justify-content: center;
    max-width: 90vw;
    width: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    flex: none;

    button {
      padding: 0 9px;
    }
  }
`;
