/* Essas linhas de código estão importando os módulos necessários para o aplicativo. */
const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require("nodemailer");

/* O código abaixo está criando um pool de conexão para um banco de dados MySQL. */
const db = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "123@start",
  database: "developerkids",
});

/* 'app.use(express.json())' é um middleware que permite ao aplicativo analisar dados JSON enviados no corpo da solicitação. Ele é usado para lidar com dados JSON na solicitação. */
app.use(express.json());
app.use(cors());

/* O código abaixo está definindo uma rota para tratar uma requisição POST para "/cadastro". */
app.post("/cadastro", async (req, res) => {
  /* O código 'const { c_nomecria_cont, d_nasccria_cont, c_nomeresp_cont, c_emailresp_cont, c_senha_cont } = req.body;' está usando a desestruturação de objeto para extrair propriedades específicas do objeto 'req.body'. */
  const {
    c_nomecria_cont,
    d_nasccria_cont,
    c_nomeresp_cont,
    c_emailresp_cont,
    c_senha_cont,
  } = req.body;

  /* Este código realiza uma consulta para selecionar todos os registros de uma tabela chamada 'devconta', onde o valor da 'coluna c_emailresp_cont' corresponde a um valor específico fornecido. */
  db.query(
    "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
    [c_emailresp_cont],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      /* Este bloco de código está lidando com o processo de registro de um usuário. */
      if (result.length == 0) {
        /* A função 'bcrypt.hash()' é usada para fazer hash de uma senha usando bcrypt, uma função de hash de senha. Irá criptografar a senha. */
        bcrypt.hash(c_senha_cont, saltRounds, (erro, hash) => {
          db.query(
            "INSERT INTO devconta (c_nomecria_cont, d_nasccria_cont, c_nomeresp_cont, c_emailresp_cont, c_senha_cont) VALUES (?, ?, ?, ?, ?)",
            [
              c_nomecria_cont,
              d_nasccria_cont,
              c_nomeresp_cont,
              c_emailresp_cont,
              hash,
            ],
            (err, response) => {
              if (err) {
                res.send(err);
              }
              res.send({ msg: "Cadastrado com sucesso" });
            }
          );
        });
      } else {
        res.send({ msg: "Usuário já cadastrado" });
      }
    }
  );
});

/* O código 'app.post("/login", (req, res) => { ... })' está definindo uma rota para lidar com uma solicitação POST para "/login". */
app.post("/login", (req, res) => {
  /* Estas linhas de código estão extraindo os valores de 'c_emailresp_cont' e 'c_senha_cont' do objeto 'req.body'. */
  const c_emailresp_cont = req.body.c_emailresp_cont;
  const c_senha_cont = req.body.c_senha_cont;

  /* A função 'db.query()' é usada para executar uma consulta SQL. Neste bloco de código específico, ele é usado para verificar se existe um usuário com o e-mail fornecido na tabela 'devconta'. */
  db.query(
    "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
    [c_emailresp_cont],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      /* Este bloco de código está lidando com o processo de login de um usuário. */
      if (result.length > 0) {
        /* O código abaixo está comparando a senha fornecida ('c_senha_cont') com a senha hash armazenada no banco de dados ('result[0]. c_senha_cont'). */
        bcrypt.compare(c_senha_cont, result[0].c_senha_cont, (erro, result) => {
          if (result) {
            res.send({ msg: "Usuário Logado com sucesso" });
          } else {
            res.send({ msg: "Senha incorreta" });
          }
        });
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});

/* O código abaixo está definindo uma rota para lidar com uma solicitação GET para "/perfil/:email". O ":email" é um parâmetro de rota que permite que valores dinâmicos sejam passados na URL. */
app.get("/perfil/:email", async (req, res) => {
  const c_emailresp_cont = req.params.email;
  db.query(
    "SELECT c_nomecria_cont, d_nasccria_cont, c_nomeresp_cont, c_emailresp_cont, c_senha_cont FROM devconta WHERE c_emailresp_cont = ?",
    [c_emailresp_cont],
    (err, result) => {
      if (err) {
        console.error("Erro ao obter dados do banco de dados:", err.message);
        res
          .status(500)
          .json({ error: "Erro ao obter dados do banco de dados" });
        return;
      }
      console.log("Dados do banco de dados:", result);
      res.json(result);
    }
  );
});

/* O código abaixo está criando um objeto transportador usando o módulo nodemailer. */
const transporter = nodemailer.createTransport({
  service: "Gmail", // Exemplo: Gmail, Outlook, etc.
  auth: {
    user: "eversonvieiradelima@gmail.com", // Seu e-mail que será usado para enviar os e-mails
    pass: "whymtioighompzib", // Senha do seu e-mail
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/* O código abaixo define uma rota para tratar uma requisição POST para "/recsenha". */
app.post("/recsenha", async (req, res) => {
  /* A linha `const c_emailresp_cont = req.body.c_emailresp_cont;` está extraindo o valor da propriedade `c_emailresp_cont` do objeto `req.body` e atribuindo-o à variável `c_emailresp_cont`. Isso normalmente é usado para acessar dados enviados no corpo da solicitação de uma solicitação POST. */
  const c_emailresp_cont = req.body.c_emailresp_cont;
  /* A função `db.query()` é usada para executar uma consulta SQL no banco de dados MySQL. Neste bloco de código específico, ele é usado para verificar se existe um usuário com o e-mail fornecido na tabela `devconta`. */
  db.query(
    "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
    [c_emailresp_cont],
    async (err, result) => {
      if (err) {
        res.send(err);
      }
      /* Este bloco de código está lidando com o processo de recuperação de senha para um usuário. */
      if (result.length > 0) {
        res.send({ msg: "Conta encontrada" });

        // E-mail encontrado, então enviamos o e-mail
        /* O objeto `const mailOptions` é usado para definir as opções de envio de um e-mail. */
        const mailOptions = {
          from: "eversonvieiradelima@gmail.com", // Deve ser igual ao user na configuração do transporte
          to: c_emailresp_cont,
          subject: "Esse é um Teste de Recuperação de Senha - Sua Aplicação",
          text: "Olá! Seu e-mail foi usado para recuperar a senha na nossa aplicação.",
        };
        /* O bloco de código é responsável por enviar um e-mail ao usuário para recuperação de senha. */
        try {
          // Envio do e-mail
          const info = await transporter.sendMail(mailOptions);
          console.log("E-mail enviado:", info.response);

          res.send({
            msg: "Usuário encontrado com sucesso. Verifique seu e-mail para recuperar a senha.",
          });
          console.log(res.send.msg);
        } catch (error) {
          console.error("Erro ao enviar o e-mail:", error);
          res.status(500).json({ msg: "Erro ao enviar o e-mail" });
        }
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});

/* O código abaixo está definindo uma rota para lidar com uma solicitação POST para "/feedback". */
app.post("/feedback", async (req, res) => {
  /* A linha `const { c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk } = req.body;` está usando a desestruturação de objetos para extrair as propriedades `c_emaiusua_fdbk`, `c_assunto_fdbk` e `c_mensagem_fdbk` do objeto `req.body`. Isso permite que você acesse essas propriedades diretamente como variáveis dentro do bloco de código. */
  const { c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk } = req.body;

  /* A função `db.query()` é usada para executar uma consulta SQL no banco de dados MySQL. Neste bloco de código específico, ele está inserindo uma nova linha na tabela `devfeedback` com os valores fornecidos no objeto `req.body`. */
  db.query(
    "INSERT INTO devfeedback (c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk) VALUES (?, ?, ?)",
    [c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk],
    (err, response) => {
      if (err) {
        res.send(err);
      }
      res.send({ msg: "Feedback enviado com sucesso" });
    }
  );
});

/* O código abaixo está definindo uma rota para tratar uma requisição POST para "/novidades". */
app.post("/novidades", async (req, res) => {
  /* A linha `const { c_emaiusua_novid } = req.body;` está usando a desestruturação de objetos para extrair a propriedade `c_emaiusua_novid` do objeto `req.body`. Isso permite que você acesse o valor de `c_emaiusua_novid` diretamente como uma variável dentro do bloco de código. */
  const { c_emaiusua_novid } = req.body;

  /* O código `db.query()` é usado para executar uma consulta SQL no banco de dados MySQL. Neste bloco de código específico, ele está inserindo uma nova linha na tabela `devfeedback` com o valor de `c_emaiusua_novid` fornecido no objeto `req.body`. */
  db.query(
    "INSERT INTO devfeedback (c_emaiusua_novid) VALUES (?)",
    [c_emaiusua_novid],
    (err, response) => {
      if (err) {
        res.send(err);
      }
      res.send({ msg: "E-mail cadastrado com sucesso" });
    }
  );
});

/* O código abaixo está iniciando o servidor e ouvindo as solicitações de entrada na porta 3001. */
app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
