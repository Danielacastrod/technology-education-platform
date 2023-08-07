import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo-developer-kids.png";

const StyledHeader = styled.header`
  img {
    height: 130px;
    margin-left: 1rem;
    position: fixed;
    width: 130px;
  }

  button {
    position: fixed;
    margin-top: 0.5rem;
    margin-left: 85%;
    text-transform: uppercase;
    background-color: #6100c0;
    color: #ffffff;

    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
    font-size: 17px;
    font-weight: 700;
    height: 58px;
    text-align: center;
    width: 150px;
  }

  @media (max-width: 768px) {
    img {
      height: 90px;
      margin-left: 1rem;
      position: fixed;
      width: 90px;
    }

    button {
      border-radius: 15px;
      font-size: 13px;
      height: 42px;
      width: 110px;
      position: fixed;
      margin-top: 0.5rem;
      margin-left: 85%;
    }
  }

  @media (max-width: 430px) {
    img {
      height: 60px;
      width: 60px;
      margin-left: 0.1rem;
      margin-top: -0.1rem;
    }

    button {
      margin-top: 0.3rem;
      margin-left: 82%;
      font-size: 0.5rem;
      width: 4rem;
      height: 2rem;
      border-radius: 8px;
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <StyledHeader>
      <img src={logo} alt="Logo DevPro" />
      <button onClick={login}>Já possuo conta</button>
    </StyledHeader>
  );
}

export default Header;
