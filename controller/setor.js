import connection from '../database/connection.js';

class SetorController {

    post(setor){
      return new Promise((resolve, reject) => {
        const sql = "INSERT INTO setor SET ?"
        connection.query(sql, setor, (erro, resultados) => {
          if(erro){
            reject(erro);
          } else{
            resolve(resultados);
          }
        })
      })
    }

    get(){
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM setor";
        connection.query(sql, null, (erro, resultados) => {
          if(erro){
            reject(erro);
          } else{
            resolve(resultados);
          }
        })
      })
    }

    getOne(id){
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM setor WHERE idSetor=${id}`;
        connection.query(sql, null, (erro, resultados) => {
          if(erro){
            reject(erro);
          }else{
            if(resultados.length == 0) {
              reject({error: 'Setor não encontrado'});
            }
            resolve(resultados[0]);
          }
        });
      });
    }

    delete(id){
      return new Promise((resolve, reject) => {
        const sql = `DELETE FROM setor WHERE idSetor=${id}`;
        connection.query(sql, null, (erro, resultados) => {
          if(erro){
            reject(erro);
          } else {
            resolve(resultados);
          }
        });
      });
    }

    patch(params){
      return new Promise((resolve, reject) => {
        const {id, fields} = params;
        const sql = `UPDATE setor SET ? WHERE idSetor=${id}`;
        connection.query(sql, fields , (erro, resultados) => {
          if(erro){
            reject(erro);
          }else{
            resolve(resultados);
          }
        });
      });
    }
}

export default new SetorController();