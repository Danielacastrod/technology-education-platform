const db = require("../../database/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class Repository {
  async findByEmail(c_emailresp_cont) {
    const [row] = await db.query(
      "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
      [c_emailresp_cont]
    );
    return [row];
  }

  async create({
    c_nomecria_cont,
    d_nasccria_cont,
    c_nomeresp_cont,
    c_emailresp_cont,
    c_senha_cont,
  }) {
    try {
      const result = await db.query(
        "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
        [c_emailresp_cont]
      );

      if (result.length == 0) {
        const hashedSenha = await new Promise((resolve, reject) => {
          bcrypt.hash(c_senha_cont, saltRounds, (erro, hash) => {
            if (erro) reject(erro);
            resolve(hash);
          });
        });
        await db.query(
          `
                INSERT INTO devconta (c_nomecria_cont, d_nasccria_cont, c_nomeresp_cont, c_emailresp_cont, c_senha_cont) VALUES (?, ?, ?, ?, ?)
              `,
          [
            c_nomecria_cont,
            d_nasccria_cont,
            c_nomeresp_cont,
            c_emailresp_cont,
            hashedSenha,
          ]
        );
        return [{ message: "Cadastrado com sucesso" }];
      } else {
        return [{ message: "Usuário já cadastrado" }];
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async findByLogin(c_emailresp_cont, c_senha_cont) {
    try {
      const result = await db.query(
        "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
        [c_emailresp_cont]
      );

      if (result) {
        const passwordMatch = await bcrypt.compare(
          c_senha_cont,
          result[0].c_senha_cont
        );

        if (passwordMatch) {
          return result;
        }
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async findByPerfil(c_emailresp_cont) {
    try {
      const result = await db.query(
        "SELECT * FROM devconta WHERE c_emailresp_cont = ?",
        [c_emailresp_cont]
      );
      if (result) {
        return result;
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async toAdd({ c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk }) {
    try {
      await db.query(
        "INSERT INTO devfeedback (c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk) VALUES (?, ?, ?)",
        [c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk]
      );
      return [{ message: "Feedback enviado com sucesso" }];
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async letter(c_emaiusua_novid) {
    try {
      await db.query("INSERT INTO devnovidades (c_emaiusua_novid) VALUES (?)", [
        c_emaiusua_novid,
      ]);
      return [{ message: "E-mail cadastrado com sucesso" }];
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }
}

module.exports = new Repository();
