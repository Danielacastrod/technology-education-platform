import styled from "styled-components";
import tetris from "../../../img/tetris.png";

export const Tetris = styled.div`
  width: 672px;
  height: 378px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${tetris}) no-repeat center / cover;

  div {
    color: #ffffff;
    text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    width: 472px;
    height: 278px;
  }

  @media (max-width: 430px) {
    width: 372px;
    height: 178px;

    div {
      font-size: 18px;
    }
  }
`;
