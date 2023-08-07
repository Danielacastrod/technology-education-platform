import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const StyledForm = styled(Form)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 3rem;
  width: 100%;

  @media (max-width: 430px) {
    padding: 0 2rem;
  }
`;

const StyledFormGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 0.3rem;
    width: 100%;

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 430px) {
    margin-bottom: 0.5rem;
    width: 100%;

    label {
      font-size: 0.6rem;
    }
  }
`;

const StyledInput = styled(Field)`
  background: rgba(12, 12, 12, 0.75);
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.432);
  color: #ffffff;
  cursor: text;
  height: 43px;
  margin: 4px 0;
  padding: 0 6px;
  width: 513px;

  @media (max-width: 768px) {
    height: 38px;
    padding: 0 6px;
    width: 100%;
    margin: 2px 0;
  }

  @media (max-width: 430px) {
    height: 28px;
    padding: 0 6px;
    width: 100%;
    font-size: 0.5rem;
    border-radius: 8px;
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

const StyledConteinerDoc = styled.div`
  align-items: center;
  display: flex;
  height: 4.8rem;
  justify-content: space-between;

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
    color: #000;
    font-size: 17px;
    font-weight: 700;
    height: 50px;
    text-align: center;
    width: 150px;
  }

  @media (max-width: 768px) {
    button {
      border-radius: 15px;
      font-size: 13px;
      height: 42px;
      width: 110px;
    }
  }

  @media (max-width: 430px) {
    button {
      border-radius: 8px;
      font-size: 0.5rem;
      height: 2rem;
      width: 70px;
      font-weight: 900;
    }
  }
`;

const StyledBoxDoc = styled.div`
  height: 100%;
`;

const StyledBoxPermicao = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 0.8rem;
  margin: 0 0.5rem 5rem 0;
  padding: 1rem;
  width: 21rem;
  height: 5rem;

  a {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    height: 4.5rem;
  }

  @media (max-width: 430px) {
    font-size: 0.6rem;
    margin: 0 0.5rem 5rem 0;
    padding: 1rem 0;
    width: 12rem;

    label {
      font-size: 0.55rem;
    }
  }
`;

const StyledCheck = {
  cursor: "pointer",
  marginRight: ".4rem",
};

export default function Formulario() {
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  const [atualizaGrid, setAtializaGrid] = useState(false);
  const FormRef = useRef();

  async function handleClickCadastro(values) {
    if (!values.aceitarTermos) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }
    const {
      c_nomecria_cont,
      d_nasccria_cont,
      c_nomeresp_cont,
      c_emailresp_cont,
      c_senha_cont,
    } = FormRef.current;

    const dados = {
      c_nomecria_cont: c_nomecria_cont.value,
      d_nasccria_cont: d_nasccria_cont.value,
      c_nomeresp_cont: c_nomeresp_cont.value,
      c_emailresp_cont: c_emailresp_cont.value,
      c_senha_cont: c_senha_cont.value,
    };

    try {
      const response = await Axios.get(
        `https://api-rest-azure.vercel.app/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
        // `http://localhost:3000/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
      );
      if (response.data.length > 0) {
        alert("Este e-mail já está cadastrado.");
        return;
      }
    } catch (error) {
      // Capturar erros e exibir uma mensagem genérica de erro
      alert("Ocorreu um erro ao verificar o e-mail.");
      return;
    }

    // await Axios.post("http://localhost:3000/cadastro", dados);
    await Axios.post("https://api-rest-azure.vercel.app/cadastro", dados);
    setAtializaGrid(!atualizaGrid);
    alert("Cadastro realizado com sucesso");
    login();
  }

  const validationCadastro = yup.object().shape({
    c_nomecria_cont: yup.string().required("Este campo é obrigatório"),
    d_nasccria_cont: yup.date().required("Este campo é obrigatório"),
    c_nomeresp_cont: yup.string().required("Este campo é obrigatório"),
    c_emailresp_cont: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Este campo é obrigatório"),
    c_senha_cont: yup
      .string()
      .min(8, "A senha deve conter 8 caracteres")
      .required("Este campo é obrigatório"),
    confirmSenha: yup
      .string()
      .oneOf([yup.ref("c_senha_cont"), null], "As senhas não são iguais"),
  });

  return (
    <Formik
      initialValues={{
        c_nomecria_cont: "",
        d_nasccria_cont: "",
        c_nomeresp_cont: "",
        c_emailresp_cont: "",
        c_senha_cont: "",
        confirmSenha: "",
        aceitarTermos: false,
      }}
      onSubmit={handleClickCadastro}
      validationSchema={validationCadastro}
    >
      <StyledForm ref={FormRef}>
        <StyledFormGroup>
          <label htmlFor="nomeCrianca">Nome da Criança </label>
          <StyledInput name="c_nomecria_cont" id="nomeCrianca" />

          <StyledError
            component="span"
            name="c_nomecria_cont"
            className="form-error--acesso"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor="nascCrianca">Data de nascimento da Criança </label>
          <StyledInput name="d_nasccria_cont" id="nascCrianca" type="date" />

          <StyledError
            component="span"
            name="d_nasccria_cont"
            className="form-error--acesso"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor="nomeResponsavel">Nome do Responsável </label>
          <StyledInput name="c_nomeresp_cont" id="nomeResponsavel" />

          <StyledError
            component="span"
            name="c_nomeresp_cont"
            className="form-error--acesso"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor="email">E-mail do responsável </label>
          <StyledInput type="email" name="c_emailresp_cont" id="email" />

          <StyledError
            component="span"
            name="c_emailresp_cont"
            className="form-error--acesso"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor="senha">Senha </label>
          <StyledInput type="password" name="c_senha_cont" id="senha" />

          <StyledError
            component="span"
            name="c_senha_cont"
            className="form-error--acesso"
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor="confirmaSenha">Confirme sua senha </label>
          <StyledInput type="password" name="confirmSenha" id="confirmaSenha" />

          <StyledError
            component="span"
            name="confirmSenha"
            className="form-error--acesso"
          />
        </StyledFormGroup>
        <StyledConteinerDoc>
          <StyledBoxDoc>
            <StyledBoxPermicao>
              <Field
                type="checkbox"
                name="aceitarTermos"
                style={StyledCheck}
                id="aceitarTermos"
              />
              <label className="documentacao--cadastro" htmlFor="aceitarTermos">
                Ao preencher o formulário acima você concorda com os nossos{" "}
                <a href="/termosecondicoes" target="_blank">
                  Termos de uso
                </a>{" "}
                e nossa{" "}
                <a href="/politicadeprivacidade" target="_blank">
                  Política de Privacidade
                </a>
                .
              </label>
            </StyledBoxPermicao>
          </StyledBoxDoc>

          <button type="submit">Cadastrar</button>
        </StyledConteinerDoc>
      </StyledForm>
    </Formik>
  );
}
