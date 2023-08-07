import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

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
      font-size: 11px;
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
    position: relative;
  }
`;

export default function Formulario() {
  const navigate = useNavigate();

  const handleClickRecSenha = (values) => {
    Axios.post("http://localhost:3001/recsenha", {
      c_emailresp_cont: values.c_emailresp_cont,
    }).then((response) => {
      if (response.data.msg === "Conta encontrada") {
        console.log(response.data.msg);
        alert("Verifique seu e-mail");
        navigate("/");
      } else {
        console.log(response.data.msg);
        alert(response.data.msg);
      }
    });
  };

  const validationLogin = yup.object().shape({
    c_emailresp_cont: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Este campo é obrigatório"),
  });

  return (
    <Formik
      initialValues={{ c_emailresp_cont: "" }}
      onSubmit={handleClickRecSenha}
      validationSchema={validationLogin}
    >
      {({ values, handleChange }) => (
        <StyledForm>
          <StyleDiv>
            <label htmlFor="emailUsuario" className="labelInputs--login">
              Insira seu e-mail para redefinir sua senha
            </label>
            <StyledInput
              type="email"
              name="c_emailresp_cont"
              id="emailUsuario"
              onChange={handleChange}
            />

            <StyledError component="span" name="c_emailresp_cont" />
          </StyleDiv>
          <BoxBotao />
        </StyledForm>
      )}
    </Formik>
  );
}
