import connection from '../database/connection.js';

export default function evento() {
    const sql = `CREATE TABLE IF NOT EXISTS evento (
    idEvento int AUTO_INCREMENT,
    descricao varchar(255) NOT NULL,
    data datetime NOT NULL,
    duracao int,
    setor_idSetor int NOT NULL,
    FOREIGN KEY (setor_idSetor) REFERENCES setor (idSetor),
    PRIMARY KEY (idEvento)
    )`;
    return connection.query(sql);
};
    