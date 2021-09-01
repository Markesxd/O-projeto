import { Router } from 'express';
import ElogioController from '../controller/elogio.js'

const elogioRouter = Router();

elogioRouter.get('/', (req, res, next) => {
    ElogioController.get()
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

elogioRouter.get('/:idElogio', (req, res, next) => {
    ElogioController.getById(req.params.idElogio)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});
elogioRouter.get('/destinatario/:idMembro', (req, res, next) => {
    ElogioController.getByDestinatario(req.params.idMembro)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});
elogioRouter.get('/remetente/:idMembro', (req, res, next) => {
    ElogioController.getByRemetente(req.params.idMembro)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});
elogioRouter.post('/', (req, res, next) => {
    ElogioController.post(req.body)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

elogioRouter.delete('/:idElogio', (req, res, next) => {
    ElogioController.delete(req.params.idElogio)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
        })
});

elogioRouter.patch('/', (req, res, next) => {
    const {idElogio, fields} = req.body;
    ElogioController.patch(idElogio, fields)
        .then((resolve) => {
            res.json(resolve)
        })
        .catch((reject) => {
            res.status(400).json(reject)
            console.log(reject)
        })
});

export default elogioRouter;
