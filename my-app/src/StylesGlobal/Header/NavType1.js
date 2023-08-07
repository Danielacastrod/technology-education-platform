import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../screen/img/logo-developer-kids.png";
import perfil from "../../screen/img/perfil.png";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 430px) {
    padding: 0 1rem;
  }
`;

const StyledLogo = styled.button`
  background: url(${logo}) no-repeat center / cover;
  border: none;
  height: 94px;
  width: 94px;

  @media (max-width: 430px) {
    height: 65px;
    width: 65px;
  }
`;

const StyledBoxCabecalho = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    width: 7rem;
  }
`;

const StyledBotaoPerfil = styled.button`
  background: url(${perfil}) no-repeat center / cover;
  background-color: #dbdbdb;
  border: none;
  border-radius: 100%;
  height: 54px;
  width: 54px;

  @media (max-width: 430px) {
    height: 35px;
    width: 35px;
  }
`;

const StyledBotaoSair = styled.button`
  background-color: #6100c0;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  text-align: center;
  width: 80px;
  text-transform: uppercase;

  @media (max-width: 430px) {
    border-radius: 10px;
    font-size: 13px;
    height: 30px;
    width: 60px;
  }
`;

export default function NavType1() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  const encodedEncryptedEmail = encodeURIComponent(c_emailresp_cont);

  function Home() {
    navigate(`/home/${encodedEncryptedEmail}`);
  }

  function Perfil() {
    navigate(`/perfil/${encodedEncryptedEmail}`);
  }

  function Sair() {
    navigate("/");
  }

  return (
    <StyledNav>
      <StyledLogo onClick={Home}></StyledLogo>
      <StyledBoxCabecalho>
        <StyledBotaoPerfil onClick={Perfil}></StyledBotaoPerfil>
        <StyledBotaoSair onClick={Sair}>Sair</StyledBotaoSair>
      </StyledBoxCabecalho>
    </StyledNav>
  );
}
