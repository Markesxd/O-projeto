import connection from '../database/connection.js';

class MembroController {

      post(membro){
        return new Promise((resolve, reject) => {
          const sql = "INSERT INTO membro SET ?"
          connection.query(sql, membro, (erro, resultados) => {
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
          const sql = `SELECT * FROM membro`;
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
          const sql = `SELECT * FROM membro WHERE idMembro=${id}`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            }else{
              if(resultados.length == 0) {
                reject({error: 'Membro não encontrado'});
              }
              resolve(resultados[0]);
            }
          });
        });
      }

      delete(id){
        return new Promise((resolve, reject) => {
          const sql = `DELETE FROM membro WHERE idMembro=${id}`;
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
          const sql = `UPDATE membro SET ? WHERE idMembro=${id}`;
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

export default new MembroController();
