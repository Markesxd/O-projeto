import connection from '../database/connection.js'

class AvaliacaoController {

    post(avaliacao) {
        return new Promise((resolve, reject) => {
            const camposObrigatorios = ['avaliador', 'avaliado', 'pontuacao']
            camposObrigatorios.forEach(campo => {
                if(avaliacao[campo] === undefined){
                    reject({erro: new Error('Todos os campos devem ser preenchidos!')})
                }
            })

            const sql = "INSERT INTO avaliacao SET ?;"
            connection.query(sql, avaliacao, (erro, resultados) => {
                if (erro) {
                    if(erro.errno === 1452){
                        erro.message = "O parametro 'avaliador' ou 'avaliado' devem estar associados ao ID de um membro existente."
                        reject({erro, status: 400})
                    }
                    reject(erro)
                } else {
                    resolve(resultados)
                }
            })
        })
    }

    get() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM avaliacao;"
            connection.query(sql, null, (erro, resultados) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve(resultados);
                }
            })
        })
    }

    getById(idAvaliacao) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM avaliacao WHERE idAvaliacao = ?;"
            connection.query(sql, [idAvaliacao], (erro, resultados) => {
                if (erro) {
                    reject(erro)
                } else {
                    if(resultados.length == 0){
                        reject(new Error('Avaliação não encontrada!'))
                    }
                    resolve(resultados[0])
                }
            })
        })
    }

    getByAvaliador(idAvaliador) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM avaliacao WHERE avaliador = ?;"
            connection.query(sql, [idAvaliador], (erro, resultados) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultados)
                }
            })
        })
    }

    getByAvaliado(idAvaliado) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM avaliacao WHERE avaliado = ?;"
            connection.query(sql, [idAvaliado], (erro, resultados) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultados)
                }
            })
        })
    }

    delete(idAvaliacao) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM avaliacao WHERE idAvaliacao = ?;"
            connection.query(sql, [idAvaliacao], (erro, resultados) => {
                if(erro){
                    reject(erro)
                } else {
                    if(resultados.affectedRows == 0) {
                        reject(new Error('Avaliação não encontrada!'))
                    }
                    resolve(resultados)
                }
            })
        })
    }

    patch(avaliacao) {
        return new Promise((resolve, reject) => {
            const {idAvaliacao, ...fields} = avaliacao
            const campos = Object.keys(fields)
            
            if(campos.length == 0){
                reject(new Error('É preciso passar pelo menos um campo!'))
            }
            campos.forEach(campo => {
                if(fields[campo] == ''){
                    reject(new Error(`o campo ${campo} está vazio.`))
                }
            })

            const sql = "UPDATE avaliacao SET ? WHERE idAvaliacao = ?;"
            connection.query(sql, [fields, idAvaliacao], (erro, resultados) => {
                if(erro){
                    if(erro.errno === 1452){
                        erro.message = "O parametro 'avaliador' ou 'avaliado' devem estar associados ao ID de um membro existente."
                        reject({erro, status: 400})
                    }
                    reject(erro)
                } else {
                    if(resultados.affectedRows == 0) {
                        reject(new Error('Avaliação não encontrada!'))
                    }
                    resolve(resultados)
                }
            })
        })
    }
}

export default new AvaliacaoController