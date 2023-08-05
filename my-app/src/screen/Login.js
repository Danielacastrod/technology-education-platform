import "../App.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AES } from "crypto-js";
import logo from "./img/logo-developer-kids.png";

/**
  A função Login é uma função JavaScript que lida com a funcionalidade de login, incluindo criptografar o e-mail, fazer uma solicitação POST ao servidor e navegar para a página inicial se o login for bem-sucedido.
  @returns O componente Login está sendo retornado.
*/
export default function Login() {
  /* 'const navegar = useNavigate();' está usando o gancho 'useNavigate' da biblioteca 'react-router-dom' para obter a função 'navigate'. A função 'navigate' é usada para navegar programaticamente para diferentes páginas no aplicativo. Nesse caso, é usado para navegar até a página inicial após um login bem-sucedido. */
  const navigate = useNavigate();

  /**
  A função encryptEmail usa um e-mail e uma chave secreta como entrada, criptografa o e-mail usando a criptografia AES e retorna o e-mail criptografado como uma string.
  @param email - O parâmetro 'email' é o endereço de email que você deseja criptografar.
  @param secretKey - O parâmetro 'secretKey' é uma string que é usada como uma chave secreta para criptografar o e-mail. É usado como parâmetro para a função AES.encrypt() para criptografar o e-mail.
  @returns O e-mail criptografado como uma string.
  */
  const encryptEmail = (email, secretKey) => {
    const encryptedEmail = AES.encrypt(email, secretKey).toString();
    return encryptedEmail;
  };

  /**
  A função handleClickLogin lida com o processo de login criptografando o e-mail, fazendo uma solicitação POST para o servidor e navegando para a página inicial se o login for bem-sucedido.
  @param values - Um objeto contendo os valores do e-mail e senha digitados pelo usuário.
  */
  const handleClickLogin = (values) => {
    const email = values.c_emailresp_cont;
    const encryptedEmail = encryptEmail(email, "chave_secreta");

    Axios.post("http://localhost:3001/login", {
      c_emailresp_cont: values.c_emailresp_cont,
      c_senha_cont: values.c_senha_cont,
    }).then((response) => {
      if (response.data[0]) {
        console.log("Usuário Logado com sucesso");
        navigate(`/home/${encryptedEmail}`);
        window.location.reload();
      } else {
        alert("Conta não encontrada");
      }
    });
  };

  /* O 'const validationLogin' é um objeto de esquema Yup que define as regras de validação para os campos do formulário de login. */
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

  /* A instrução 'return' no código está retornando um código JSX (JavaScript XML) que representa a estrutura e o conteúdo do componente Login. */
  return (
    <div className="container--acesso">
      <img src={logo} alt="Logo DevPro" className="logo--acesso" />
      <div className="box--acesso">
        <div className="boxTransparente--acesso">
          <h2 className="titulo--acesso">Entrar</h2>

          <Formik
            initialValues={{ c_emailresp_cont: "" }}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            {({ values, handleChange }) => (
              <Form className="login-form--acesso">
                <div className="login-form-group--acesso">
                  <label htmlFor="emailUsuario" className="labelInputs--login">
                    E-mail:
                  </label>
                  <Field
                    type="email"
                    name="c_emailresp_cont"
                    className="form-field inputs--acesso"
                    id="emailUsuario"
                    onChange={handleChange}
                  />

                  <ErrorMessage
                    component="span"
                    name="c_emailresp_cont"
                    className="form-error--acesso"
                  />
                </div>

                <div className="login-form-group--acesso">
                  <label htmlFor="senhaUsuario" className="labelInputs--login">
                    Senha:
                  </label>
                  <Field
                    type="password"
                    name="c_senha_cont"
                    className="form-field inputs--acesso"
                    id="senhaUsuario"
                  />

                  <ErrorMessage
                    component="span"
                    name="c_senha_cont"
                    className="form-error--acesso"
                  />
                </div>
                <div className="boxBotao--acesso">
                  <button className="botao--acesso" type="submit">
                    Entrar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="boxCaminhos--login">
            <a href="/recsenha" className="recuperaSenha--login">
              Esqueceu sua senha?
            </a>
            <p className="paragrafo--login">
              Não possui uma conta?
              <a href="/cadastro" className="cadastrar--login">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
