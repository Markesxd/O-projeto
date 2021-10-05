import connection from '../database/connection.js';

class EventoController {

    post(evento){
      return new Promise((resolve, reject) => {
        const camposObrigatorios = ['descricao', 'data', 'setor_id_setor'];
        camposObrigatorios.forEach(campo => {
          if(evento[campo] === undefined) {

            reject({erro: new Error('Todos os campos devem ser preenchidos!'), status: 400});
          }
        });
        const sql = "INSERT INTO evento SET ?"
        connection.query(sql, evento, (erro, resultados) => {
          if(erro){
            reject({erro, status: 400});
          } else{
            resolve(resultados);
          }
        })
      })
    }

    get(pagina = 1, tamanhoPagina = 5){
      pagina = Number(pagina);
      const pager = tamanhoPagina * (pagina - 1);
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM evento";
        connection.query(sql, null, (erro, resultados) => {
          if(erro){
            reject(erro);
          } else{
            const paginado = resultados.slice(pager, pager + tamanhoPagina);
            if(paginado.length === 0) reject(new Error('pagina não existe'));
            resolve(paginado);
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
        const campos = Object.keys(fields)
          if(campos.length == 0){
            reject(new Error('É preciso passar pelo menos um campo!'));
          }
          campos.forEach(campo => {
            if(fields[campo] == ''){
              reject(new Error(`O campo '${campo}' está vazio`));
            }
          })
        const sql = `UPDATE evento SET ? WHERE idEvento=${id}`;
        connection.query(sql, fields , (erro, resultados) => {
          if(erro){
            reject(erro);
          }else{
            if(resultados.affectedRows == 0){
              reject(new Error('Evento não Encontrado!'));
            }
            resolve(resultados);
          }
        });
      });
    }
}

export default new EventoController(); 
