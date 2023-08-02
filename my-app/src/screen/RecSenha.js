import "../App.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import chaves from "./img/chaves.png";

export default function RecSenha({ navigation }) {
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
    <div className="container--acesso">
      <img src={logo} alt="Logo DevPro" className="logo--acesso" />
      <div className="box--acesso">
        <div className="boxTransparente--acesso">
          <h2 className="titulo--acesso">Esqueceu a senha?</h2>
          <img src={chaves} alt="Logo DevPro" className="chaves--recsenha" />

          <Formik
            initialValues={{ c_emailresp_cont: "" }}
            onSubmit={handleClickRecSenha}
            validationSchema={validationLogin}
          >
            {({ values, handleChange }) => (
              <Form className="login-form--acesso">
                <div className="login-form-group--acesso">
                  <label htmlFor="emailUsuario" className="labelInputs--login">
                    Insira seu e-mail para redefinir sua senha
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
                <div className="boxBotao--acesso">
                  <button className="botao--acesso" type="submit">
                    Enviar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
