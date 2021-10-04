import connection from "../database/connection.js";

const intiElogioTable = () => {
    const sql = `CREATE TABLE IF NOT EXISTS elogio (
        idElogio int(11) NOT NULL AUTO_INCREMENT,
        remetente int(11) NOT NULL,
        destinatario int(11) NOT NULL,
        anonimo tinyint(4) NOT NULL,
        conteudo text COLLATE utf8_bin NOT NULL,
        dataElogio date NOT NULL,
        PRIMARY KEY (idElogio),
        FOREIGN KEY (destinatario) REFERENCES membro (idMembro),
        FOREIGN KEY (remetente) REFERENCES membro (idMembro)
        );
        `
    return connection.query(sql)
}

export default intiElogioTable