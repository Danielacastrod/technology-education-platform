const Repository = require("../repositories/Repository");

class Controller {
  async verify(request, response) {
    const { c_emailresp_cont } = request.body;
    const cadastrado = await Repository.findByEmail(c_emailresp_cont);
    if (cadastrado) {
      return response.json(cadastrado);
    }
    return response.status(404).json({ error: "Usuário não cadastrado" });
  }

  async store(request, response) {
    const {
      c_nomecria_cont,
      d_nasccria_cont,
      c_nomeresp_cont,
      c_emailresp_cont,
      c_senha_cont,
    } = request.body;

    const cadastrar = await Repository.create({
      c_nomecria_cont,
      d_nasccria_cont,
      c_nomeresp_cont,
      c_emailresp_cont,
      c_senha_cont,
    });
    response.json(cadastrar);
  }

  async check(request, response) {
    const { c_emailresp_cont, c_senha_cont } = request.body;

    const login = await Repository.findByLogin(c_emailresp_cont, c_senha_cont);
    if (login) {
      return response.json(login);
    }
    return response.json({ error: "Conta não encontrada" });
  }

  async show(request, response) {
    const { c_emailresp_cont } = request.body;
    const cadastrado = await Repository.findByPerfil(c_emailresp_cont);
    if (cadastrado) {
      return response.json(cadastrado);
    }
    return response.status(404).json({ error: "Usuário não cadastrado" });
  }

  async feed(request, response) {
    const { c_emaiusua_fdbk, c_assunto_fdbk, c_mensagem_fdbk } = request.body;

    const feedback = await Repository.toAdd({
      c_emaiusua_fdbk,
      c_assunto_fdbk,
      c_mensagem_fdbk,
    });
    response.json(feedback);
  }

  async news(request, response) {
    const { c_emaiusua_novid } = request.body;

    const newsletter = await Repository.letter(c_emaiusua_novid);
    response.json(newsletter);
  }
}

module.exports = new Controller();
