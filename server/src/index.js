const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes");

app.use(express.json());

// Configuração do CORS para permitir solicitações de 'http://localhost:3000'
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(routes);

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
