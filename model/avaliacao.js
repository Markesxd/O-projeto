import connection from "../database/connection.js";

const intiAvaliacaoTable = () => {
    const sql = `CREATE TABLE IF NOT EXISTS avaliacao (
            idAvaliacao int(11) NOT NULL AUTO_INCREMENT,
            avaliado int(11) NOT NULL,
            avaliador int(11) NOT NULL,
            pontuacao int(11) NOT NULL,
            PRIMARY KEY (idAvaliacao),
            FOREIGN KEY (avaliado) REFERENCES membro (idMembro),
            FOREIGN KEY (avaliador) REFERENCES membro (idMembro)
        );`
    return connection.query(sql)
}

export default intiAvaliacaoTable