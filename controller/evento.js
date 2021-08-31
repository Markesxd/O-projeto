import connection from '../database/connection.js';

class EventoController {

    post(evento){
      return new Promise((resolve, reject) => {
        const sql = "INSERT INTO evento SET ?"
        connection.query(sql, evento, (erro, resultados) => {
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
        const sql = "SELECT * FROM evento";
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
        const sql = `SELECT * FROM evento WHERE idEvento=${id}`;
        connection.query(sql, null, (erro, resultados) => {
          if(erro){
            reject(erro);
          }else{
            if(resultados.length == 0) {
              reject({error: 'Evento não encontrado'});
            }
            resolve(resultados[0]);
          }
        });
      });
    }

    delete(id){
      return new Promise((resolve, reject) => {
        const sql = `DELETE FROM evento WHERE idEvento=${id}`;
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
        const sql = `UPDATE evento SET ? WHERE idEvento=${id}`;
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

export default new EventoController(); 