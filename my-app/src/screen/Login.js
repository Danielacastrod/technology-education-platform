import "../App.css";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AES } from "crypto-js";
import logo from "./img/logo-developer-kids.png";

export default function Login() {
  const navigate = useNavigate();
  // const [encryptedEmail, setEncryptedEmail] = React.useState("");

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
      `http://localhost:3000/cadastro?c_emailresp_cont=${dados.c_emailresp_cont}`
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
    <div className="container--acesso">
      <img src={logo} alt="Logo DevPro" className="logo--acesso" />
      <div className="box--acesso">
        <div className="boxTransparente--acesso">
          <h2 className="titulo--acesso">Entrar</h2>

          <Formik
            initialValues={{ c_emailresp_cont: "", c_senha_cont: "" }}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            {({ values, handleChange }) => (
              <Form className="login-form--acesso" ref={FormRef}>
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
