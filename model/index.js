import membro from './membro.js'
import elogio from './elogio.js'
import avaliacao from './avaliacao.js'

export default async function models() {
  try{
    membro();
    elogio();
    avaliacao();
    console.log('Tabelas criadas com sucesso!');
} catch(erro){
  console.log(erro);
}
}
