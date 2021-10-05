import connection from '../database/connection.js';

export default function setor() {
    const sql = `CREATE TABLE IF NOT EXISTS setor (
    idSetor int AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    presidente int NOT NULL,
    PRIMARY KEY (idSetor)
    )`;
    return connection.query(sql);
};
