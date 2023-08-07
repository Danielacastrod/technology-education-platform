import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AES } from "crypto-js";

import styled from "styled-components";
import BoxBotao from "../../../StylesGlobal/Acesso/BoxBotao/BoxBotao";

const StyledForm = styled(Form)`
  margin-top: 3rem;

  @media (max-width: 430px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const StyleDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 430px) {
    width: 100%;

    label {
      font-size: 13px;
    }
  }
`;

const StyledInput = styled(Field)`
  background: rgba(12, 12, 12, 0.75);
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.432);
  color: #ffffff;
  height: 43px;
  margin: 5px 0;
  padding: 0 6px;
  width: 513px;

  @media (max-width: 430px) {
    border-radius: 8px;
    height: 30px;
    margin: 5px 0;
    padding: 0 6px;
    width: 100%;
    font-size: 0.5rem;
  }
`;

const StyledError = styled(ErrorMessage)`
  color: #a9e500;
  font-size: 12px;
  position: absolute;
  right: 0;

  @media (max-width: 430px) {
    font-size: 0.4rem;
  }
`;

export default function Formulario() {
  const navigate = useNavigate();

  const encryptEmail = (email, secretKey) => {
    const encryptedEmail = AES.encrypt(email, secretKey).toString();
    return encryptedEmail;
  };

  const FormRef = useRef();

  async function handleClickLogin(values) {
    const { c_emailresp_cont, c_senha_cont } = FormRef.current;

    const dados = {
      c_emailresp_cont: c_emailresp_cont.value,
      c_senha_cont: c_senha_cont.value,
    };

    const response = await Axios.get(
      `https://api-rest-azure.vercel.app/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
      // `http://localhost:3000/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
    );
    if (response.data.length === 0) {
      alert("Email não encontrado.");
      return;
    }

    const usuario = response.data[0];
    if (usuario.c_senha_cont !== dados.c_senha_cont) {
      alert("Senha incorreta.");
      return;
    }

    const email = dados.c_emailresp_cont;
    const encryptedEmail = encryptEmail(email, "chave_secreta");

    const encodedEncryptedEmail = encodeURIComponent(encryptedEmail);

    navigate(`/home/${encodedEncryptedEmail}`);
    window.location.reload();
  }

  const validationLogin = yup.object().shape({
    c_emailresp_cont: yup
      .string()
      .email("Não é um e-mail")
      .required("Este campo é obrigatório"),
    c_senha_cont: yup
      .string()
      .min(8, "A senha deve conter 8 caracteres")
      .required("Este campo é obrigatório"),
  });

  return (
    <Formik
      initialValues={{ c_emailresp_cont: "", c_senha_cont: "" }}
      onSubmit={handleClickLogin}
      validationSchema={validationLogin}
    >
      {({ values, handleChange }) => (
        <StyledForm ref={FormRef}>
          <StyleDiv>
            <label htmlFor="emailUsuario">E-mail:</label>
            <StyledInput
              type="email"
              name="c_emailresp_cont"
              id="emailUsuario"
              onChange={handleChange}
            />

            <StyledError component="span" name="c_emailresp_cont" />
          </StyleDiv>

          <StyleDiv>
            <label htmlFor="senhaUsuario">Senha:</label>
            <StyledInput
              type="password"
              name="c_senha_cont"
              id="senhaUsuario"
            />

            <StyledError component="span" name="c_senha_cont" />
          </StyleDiv>
          <BoxBotao />
        </StyledForm>
      )}
    </Formik>
  );
}
