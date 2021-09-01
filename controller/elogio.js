import connection from '../database/connection.js';

class ElogioController {

      post(elogio){
        return new Promise((resolve, reject) => {
          const sql = "INSERT INTO elogio SET ?"
          connection.query(sql, elogio, (erro, resultados) => {
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
          const sql = `SELECT * FROM elogio`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            } else{
              resolve(resultados);
            }
          })
        })
      }

      getById(id){
        return new Promise((resolve, reject) => {
          const sql = `SELECT * FROM elogio WHERE idElogio=${id}`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            }else{
              if(resultados.length == 0) {
                reject({error: 'Elogio não encontrado'});
              }
              resolve(resultados[0]);
            }
          });
        });
      }

      getByRemetente(id){
        return new Promise((resolve, reject) => {
          const sql = `SELECT * FROM elogio WHERE remetente=${id}`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            }else{
              if(resultados.length == 0) {
                reject({error: 'Elogio não encontrado'});
              }
              resolve(resultados);
            }
          });
        });
      }

      getByDestinatario(id){
        return new Promise((resolve, reject) => {
          const sql = `SELECT * FROM elogio WHERE destinatario=${id}`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            }else{
              if(resultados.length == 0) {
                reject({error: 'Elogio não encontrado'});
              }
              resolve(resultados);
            }
          });
        });
      }

      delete(id){
        return new Promise((resolve, reject) => {
          const sql = `DELETE FROM elogio WHERE idElogio=${id}`;
          connection.query(sql, null, (erro, resultados) => {
            if(erro){
              reject(erro);
            } else {
              resolve(resultados);
            }
          });
        });
      }

      patch(idElogio, fields){
        return new Promise((resolve, reject) => {
          const sql = `UPDATE elogio SET ? WHERE idElogio=${idElogio}`;
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

export default new ElogioController();
