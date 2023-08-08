import styled from "styled-components";
import doodle from "../../../img/doodle-do-google.png";

export const Doodle = styled.div`
  width: 672px;
  height: 378px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${doodle}) no-repeat center / cover;

  div {
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);
    border: none;
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
