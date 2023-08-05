CREATE DATABASE developerkids;
CREATE TABLE devconta (
   n_id_cont INT NOT NULL AUTO_INCREMENT,
   c_nomecria_cont VARCHAR(100) NOT NULL,
   d_nasccria_cont DATE,
   c_nomeresp_cont VARCHAR(100) NOT NULL,
   c_emailresp_cont VARCHAR(200) NOT NULL UNIQUE,
   c_senha_cont VARCHAR(200) NOT NULL,
   PRIMARY KEY(n_id_cont)
);
CREATE TABLE devfeedback (
   n_id_fdbk INT NOT NULL AUTO_INCREMENT,
   c_emaiusua_fdbk VARCHAR(200) NOT NULL,
   c_assunto_fdbk VARCHAR(200),
   c_mensagem_fdbk VARCHAR(8000),
   PRIMARY KEY(n_id_fdbk)
);
CREATE TABLE devnovidades (
   n_id_novid INT NOT NULL AUTO_INCREMENT,
   c_emaiusua_novid VARCHAR(200) NOT NULL UNIQUE,
   PRIMARY KEY(n_id_novid)
);