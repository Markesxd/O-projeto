import connection from '../database/connection.js';

class MembroController {

      post(membro){
        return new Promise((resolve, reject) => {
          const camposObrigatorios = ['nome', 'setor', 'telefone', 'email', 'dataNascimento', 'dataIngresso', 'pontuacao'];
          camposObrigatorios.forEach(campo => {
            if(membro[campo] === undefined) {

              reject({erro: new Error('Todos os campos devem ser preenchidos!'), status: 400});
            }
          });
          const sql = "INSERT INTO membro SET ?"
          connection.query(sql, membro, (erro, resultados) => {
            if(erro){
              if(erro.errno === 1062){
                erro.message = "O parametro 'telefone' não pode ter duplicadas no banco!"
                reject({erro, status: 400})
              }
              reject({erro, status: 500});
            } else{

              resolve(resultados);
            }
          })
        })
      }

      login(auth){
        return new Promise((resolve, reject) =>{
          const sql = `SELECT idMembro FROM membro WHERE email="${auth.email}" AND senha="${auth.senha}"`;
          connection.query(sql, null, (erro, resultados) => {
              if(erro){
                console.log(erro);
                reject(erro);
              } else {
                if(!resultados){
                  reject(new Error('Email ou senha estão errados'))
                }
                resolve(resultados);
              }
          });
        });
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
                reject(new Error('Membro não encontrado!'));
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
              if(resultados.affectedRows == 0){
                reject(new Error('Membro não Encontrado!'));
              }
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
            reject(new Error('É presiso passar pelo menos um campo!'));
          }
          campos.forEach(campo => {
            if(fields[campo] == ''){
              reject(new Error(`O campo '${campo}' está vasio`));
            }
          })
          const sql = `UPDATE membro SET ? WHERE idMembro=${id}`;
          connection.query(sql, fields , (erro, resultados) => {
            if(erro){
              reject(erro);
            }else{
              if(resultados.affectedRows == 0){
                reject(new Error('Membro não Encontrado!'));
              }
              resolve(resultados);
            }
          });
        });
      }
}

export default new MembroController();
