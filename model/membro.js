import connection from '../database/connection.js';

export default function membro() {
  const sql = `CREATE TABLE IF NOT EXISTS membro (
              idMembro int AUTO_INCREMENT,
              nome varchar(50) NOT NULL,
              setor int NOT NULL,
              telefone varchar(20) NOT NULL,
              email varchar(100) NOT NULL,
              senha varchar(45) NOT NULL,
              dataNascimento date NOT NULL,
              dataIngresso date NOT NULL,
              dataEgresso date,
              pontuacao int NOT NULL DEFAULT 0,
              PRIMARY KEY (idMembro),
              UNIQUE (email)
              )`;
  return connection.query(sql);
};
