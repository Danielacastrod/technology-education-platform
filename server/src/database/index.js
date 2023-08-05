const { createConnection } = require("mysql2");

const connection = new createConnection({
  host: "localhost",
  user: "root",
  password: "123@start",
  database: "developerkids",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Conexão efetuada com sucesso");
});

exports.query = async (query, values) => {
  const rows = await connection.promise().query(query, values);
  return rows[0];
};
