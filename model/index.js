import avaliacao from './avaliacao.js';
import elogio from './elogio.js';
import membro from './membro.js';
import evento from './evento.js';
import setor from './setor.js';

export default async function models() {
  try{
    avaliacao();
    elogio();
    membro();
    setor();
    evento();

    console.log('Tabelas criadas com sucesso!');
} catch(erro){
  console.log(erro);
}
}
