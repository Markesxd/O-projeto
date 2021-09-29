import membro from './membro.js'

export default async function models() {
  try{
    membro();
    console.log('Tabelas criadas com sucesso!');
} catch(erro){
  console.log(erro);
}
}
