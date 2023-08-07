import styled from "styled-components";

export const Dados = styled.p`
  align-items: center;
  background: rgba(12, 12, 12, 0.75);
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.432);
  color: #797979;
  display: flex;
  height: 43px;
  margin-bottom: 0;
  margin-top: 5px;
  padding: 0 6px;
  user-select: none;
  width: 513px;

  @media (max-width: 768px) {
    border-radius: 10px;
    height: 38px;
    margin-top: 5px;
    width: 100%;
  }

  @media (max-width: 430px) {
    border-radius: 8px;
    height: 28px;
    margin-top: 5px;
    font-size: 13px;
  }
`;
