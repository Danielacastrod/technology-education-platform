import styled from "styled-components";

export const BotaoAula = styled.button`
  width: 250px;
  height: 311px;
  background: #6100c0;
  color: #ffffff;
  text-align: center;
  border-radius: 20px;
  transition: transform 0.2s;
  border: none;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  flex: none;

  &:hover {
    transform: scale(1.1);
    background-image: linear-gradient(45deg, #0000, #040408);
  }

  img {
    width: 100%;
    height: auto;
    text-align: center;
    border-radius: 15px 15px 0 0;
  }

  img.imagemAula--app {
    border-radius: 15px;
    height: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 211px;

    p {
      font-weight: 700;
      font-size: 13px;
    }
  }
`;
