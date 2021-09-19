import {Router} from 'express';
import AvaliacaoController from '../controller/avaliacao.js';

const avaliacaoRouter = Router();

avaliacaoRouter.post('/', (req, res, next) => {
    AvaliacaoController.post(req.body)
        .then(resolve => {
            res.json(resolve)
        })
        .catch(reject => {
            res.status(400).json(reject)
        })
});

avaliacaoRouter.get('/', (req, res, next) => {
    AvaliacaoController.get()
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

avaliacaoRouter.get('/:idAvaliacao', (req, res, next) => {
    AvaliacaoController.getById(req.params.idAvaliacao)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

avaliacaoRouter.get('/avaliador/:idAvaliador', (req, res, next) => {
    AvaliacaoController.getByAvaliador(req.params.idAvaliador)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

avaliacaoRouter.get('/avaliado/:idAvaliado', (req, res, next) => {
    AvaliacaoController.getByAvaliado(req.params.idAvaliado)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});


avaliacaoRouter.delete('/:idAvaliacao', (req, res, next) => {
    AvaliacaoController.delete(req.params.idAvaliacao)
        .then(resolve => {
            res.json(resolve)
        })
        .catch(reject => {
            res.status(400).json(reject)
        })
});

avaliacaoRouter.patch('/', (req, res, next) => {
    AvaliacaoController.patch(req.body)
        .then(resolve => {
            res.json(resolve)
        })
        .catch(reject => {
            res.status(400).json(reject)
        })
});

export default avaliacaoRouter;