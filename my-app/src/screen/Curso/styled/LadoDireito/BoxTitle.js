import styled from "styled-components";

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;

  button {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 20px;
    font-size: 17px;
    border: none;
    padding: 0 0.5rem;
    font-weight: 700;
    height: 50px;
    transition: background 0.2s;
  }

  button:hover {
    background-color: #6100c0;
    border: none;
    color: #ffffff;
  }

  div {
    height: 44px;
    width: 44px;
  }

  h2 {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    button {
      height: 40px;
      font-size: 15px;
      border-radius: 12px;
    }

    div {
      height: 30px;
      width: 50px;
    }

    h2 {
      font-size: 25px;
      width: 15rem;
      margin: 0 1rem;
      text-align: center;
      font-weight: 700;
    }
  }

  @media (max-width: 430px) {
    div {
      height: 12px;
      width: 30px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;
