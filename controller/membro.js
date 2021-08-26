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
}

export default new MembroController();
