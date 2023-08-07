import React from "react";
import logo from "../../screen/img/logo-developer-kids.png";

import styled from "styled-components";
import instagram from "../../screen/img/instagram.png";
import facebook from "../../screen/img/facebook.png";
import twitter from "../../screen/img/twitter.png";
import linkedin from "../../screen/img/linkedin.png";

const StyledRodape = styled.footer`
  background-color: #000000;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledBoxRodape = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const StyledBoxContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const StyledLogo = styled.img`
  width: 130px;
  height: 130px;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 430px) {
    width: 60px;
    height: 60px;
  }
`;

const StyledLink = styled.a`
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

const StyledBoxRedes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  div {
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin-bottom: 1rem;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
  }

  @media (max-width: 768px) {
    div {
      width: 50%;
    }
  }

  @media (max-width: 430px) {
    button {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyledInstagram = styled.button`
  background: url(${instagram}) no-repeat center / cover;
`;
const StyledFacebook = styled.button`
  background: url(${facebook}) no-repeat center / cover;
`;
const StyledTwitter = styled.button`
  background: url(${twitter}) no-repeat center / cover;
`;
const StyledLinkedin = styled.button`
  background: url(${linkedin}) no-repeat center / cover;
`;

const StyledBoxCopy = styled.div`
  color: #ffffff;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 1rem;

  p {
    color: #ffffff;
  }

  @media (max-width: 430px) {
    margin-top: 0.7rem;
    p {
      font-size: 10px;
    }
  }
`;

export default function Rodape() {
  return (
    <div>
      <StyledRodape>
        <StyledBoxRodape>
          <StyledBoxContato>
            <StyledLogo src={logo} alt="Logo Developer Kids" />
            <StyledLink href="mailto:contato_developerkids@gmail.com">
              contato_developerkids@gmail.com
            </StyledLink>
          </StyledBoxContato>

          <StyledBoxRedes>
            <div>
              <StyledInstagram></StyledInstagram>
              <StyledFacebook></StyledFacebook>
              <StyledTwitter></StyledTwitter>
              <StyledLinkedin></StyledLinkedin>
            </div>
            <StyledLink href="/termosecondicoes" target="_blank">
              Termos e Condições
            </StyledLink>
          </StyledBoxRedes>
        </StyledBoxRodape>

        <StyledBoxCopy>
          <p>
            Copyright &copy; 2023 Star Dance -{" "}
            <StyledLink href="/politicadeprivacidade" target="_blank">
              Política de Privacidade
            </StyledLink>
          </p>
        </StyledBoxCopy>
      </StyledRodape>
    </div>
  );
}
