import "../App.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";

/* Esta é uma função JavaScript que manipula o processo de registro em um aplicativo da web.
O código está retornando um componente React chamado "Cadastro". Este componente é responsável por renderizar um formulário para cadastramento do usuário. Inclui campos de entrada para o nome da criança, data de nascimento, nome dos pais, e-mail dos pais, senha e confirmação de senha. Também inclui uma caixa de seleção para aceitar os termos e condições. Quando o formulário é enviado, é chamada a função handleClickCadastro, que envia um POST. */
export default function Cadastro() {
  /* A linha 'const navegar = useNavigate();' está usando o gancho 'useNavigate' da biblioteca 'react-router-dom' para obter a função 'navigate'. Esta função pode ser usada para navegar programaticamente para diferentes rotas no aplicativo. Neste caso, ele é usado para navegar para a rota "/login" após um registro bem-sucedido. */
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  /**
  A função 'handleClickCadastro' é utilizada para tratar o evento click de um formulário de cadastro, onde verifica se o usuário aceitou os termos, envia uma requisição POST para um servidor com os dados do formulário e exibe os alertas apropriados com base na resposta.
  @param values - Um objeto contendo os valores inseridos pelo usuário no formulário.
  */
  const handleClickCadastro = (values) => {
    if (!values.aceitarTermos) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }

    /* O código está fazendo uma solicitação POST para o terminal "http://localhost:3001/cadastro" com os dados do formulário como carga útil da solicitação. Os dados do formulário incluem o nome da criança, data de nascimento, nome dos pais, e-mail dos pais e senha. */
    Axios.post("http://localhost:3001/cadastro", {
      c_nomecria_cont: values.c_nomecria_cont,
      d_nasccria_cont: values.d_nasccria_cont,
      c_nomeresp_cont: values.c_nomeresp_cont,
      c_emailresp_cont: values.c_emailresp_cont,
      c_senha_cont: values.c_senha_cont,
    }).then((response) => {
      console.log(response);
      if (response.data.msg === "Cadastrado com sucesso") {
        alert("Cadastro realizado com sucesso");
        navigate("/login");
      } else {
        alert(response.data.msg);
      }
    });
  };

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
            <Form className="login-form--cadastro">
              <div className="login-form-group--cadastro">
                <label for="nomeCrianca">Nome da Criança </label>
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
                <label for="nascCrianca">Data de nascimento da Criança </label>
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
                <label for="nomeResponsavel">Nome do Responsável </label>
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
                <label for="email">E-mail do responsável </label>
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
                <label for="senha">Senha </label>
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
                <label for="confirmaSenha">Confirme sua senha </label>
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
