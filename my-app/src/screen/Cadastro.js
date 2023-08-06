import "../App.css";
import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo-developer-kids.png";

export default function Cadastro() {
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

    const response = await Axios.get(
      `http://localhost:3000/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
    );
    if (response.data.length > 0) {
      alert("Este e-mail já está cadastrado.");
      return;
    }
    await Axios.post("http://localhost:3000/cadastro", dados);
    setAtializaGrid(!atualizaGrid);
    alert("Cadastro realizado com sucesso");
    login();
  }

  /* A constante 'validationCadastro' está criando um esquema de validação usando a biblioteca 'yup'. Este esquema define as regras de validação de cada campo do formulário de cadastro. */
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

  /* O código abaixo é um trecho de código JSX escrito em JavaScript. Ele representa um formulário de registro para um site ou aplicativo. */
  return (
    <div className="container--acesso">
      <div className="boxLogo--cadastro">
        <img src={logo} alt="Logo DevPro" className="logo--cadastro" />
        <button onClick={login} className="botaoLogin--cadastro botao--acesso">
          Já possuo conta
        </button>
      </div>
      <div className="box--cadastro">
        <div className="boxTransparente--cadastro">
          <h2 className="titulo--acesso">Cadastro</h2>
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
            <Form className="login-form--cadastro" ref={FormRef}>
              <div className="login-form-group--cadastro">
                <label htmlFor="nomeCrianca" className="label--cadastro">
                  Nome da Criança{" "}
                </label>
                <Field
                  name="c_nomecria_cont"
                  className="form-field inputs--cadastro"
                  id="nomeCrianca"
                />

                <ErrorMessage
                  component="span"
                  name="c_nomecria_cont"
                  className="form-error--acesso"
                />
              </div>

              <div className="login-form-group--cadastro">
                <label htmlFor="nascCrianca" className="label--cadastro">
                  Data de nascimento da Criança{" "}
                </label>
                <Field
                  name="d_nasccria_cont"
                  className="form-field inputs--cadastro"
                  id="nascCrianca"
                  type="date"
                />

                <ErrorMessage
                  component="span"
                  name="d_nasccria_cont"
                  className="form-error--acesso"
                />
              </div>

              <div className="login-form-group--cadastro">
                <label htmlFor="nomeResponsavel" className="label--cadastro">
                  Nome do Responsável{" "}
                </label>
                <Field
                  name="c_nomeresp_cont"
                  className="form-field inputs--cadastro"
                  id="nomeResponsavel"
                />

                <ErrorMessage
                  component="span"
                  name="c_nomeresp_cont"
                  className="form-error--acesso"
                />
              </div>

              <div className="login-form-group--cadastro">
                <label htmlFor="email" className="label--cadastro">
                  E-mail do responsável{" "}
                </label>
                <Field
                  type="email"
                  name="c_emailresp_cont"
                  className="form-field inputs--cadastro"
                  id="email"
                />

                <ErrorMessage
                  component="span"
                  name="c_emailresp_cont"
                  className="form-error--acesso"
                />
              </div>

              <div className="login-form-group--cadastro">
                <label htmlFor="senha" className="label--cadastro">
                  Senha{" "}
                </label>
                <Field
                  type="password"
                  name="c_senha_cont"
                  className="form-field inputs--cadastro"
                  id="senha"
                />

                <ErrorMessage
                  component="span"
                  name="c_senha_cont"
                  className="form-error--acesso"
                />
              </div>

              <div className="login-form-group--cadastro">
                <label htmlFor="confirmaSenha" className="label--cadastro">
                  Confirme sua senha{" "}
                </label>
                <Field
                  type="password"
                  name="confirmSenha"
                  className="form-field inputs--cadastro"
                  id="confirmaSenha"
                />

                <ErrorMessage
                  component="span"
                  name="confirmSenha"
                  className="form-error--acesso"
                />
              </div>
              <div className="containerBox">
                <div className="boxDocumentos--cadastro">
                  <div className="boxPermicao--cadastro">
                    <Field
                      type="checkbox"
                      name="aceitarTermos"
                      className="checkPermicao--cadastro"
                      id="aceitarTermos"
                    />
                    <label
                      className="documentacao--cadastro"
                      htmlFor="aceitarTermos"
                    >
                      Ao preencher o formulário acima você concorda com os
                      nossos{" "}
                      <a
                        href="/termosecondicoes"
                        target="_blank"
                        className="links--cadastro"
                      >
                        Termos de uso
                      </a>{" "}
                      e nossa{" "}
                      <a
                        href="/politicadeprivacidade"
                        target="_blank"
                        className="links--cadastro"
                      >
                        Política de Privacidade
                      </a>
                      .
                    </label>
                  </div>
                </div>

                <button className="botao--acesso" type="submit">
                  Cadastrar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
