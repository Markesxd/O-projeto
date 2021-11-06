import {Router} from 'express';
import avaliacaoRouter from './avaliacao.js';
import membroRouter from './membro.js';
import elogioRouter from './elogio.js';
import setorRouter from './setor.js';
import eventoRouter from './evento.js';

const router = Router();

router.get('/', (req, res) => {res.send(`<a href="https://linkedej.com.br/site/"><h1>API da LinkedJr</h1></a>`)});
router.use('/membro', membroRouter);
router.use('/elogio',elogioRouter);
router.use('/avaliacao', avaliacaoRouter);
router.use('/setor',setorRouter);
router.use('/evento',eventoRouter);

export default router;
