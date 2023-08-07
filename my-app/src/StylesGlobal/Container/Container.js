import styled from "styled-components";
import capa from "../../screen/img/capa.png";

export const Container = styled.div`
  background: url(${capa}) no-repeat center / cover;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    /* Inverter as cores do ícone */
  }

  button {
    cursor: pointer;
    transition: opacity 0.5s;
  }

  button:hover {
    opacity: 0.8;
  }
`;
