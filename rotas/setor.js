import { Router } from 'express';
import SetorController from '../controller/setor.js';

const setorRouter = Router();

setorRouter.get('/', (req, res) => {
    SetorController.get()
        .then((resolve) => res.json(resolve))
        .catch((reject) => res.status(400).json(reject));
});

setorRouter.get('/:id', (req, res) => {
    SetorController.getOne(req.params.id)
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json({mensagem: reject.message}));
  });

setorRouter.post('/', (req, res) => {
    SetorController.post(req.body)
        .then((resolve) => res.status(201).json(resolve))
        .catch((reject) => res.status(reject.status).json({mensagem: reject.erro.message}));
});

setorRouter.delete('/:id', (req, res) => {
    SetorController.delete(req.params.id)
    .then((resolve) => res.status(204).end())
    .catch((reject) => res.status(400).json({message: reject.message}));
});
  
setorRouter.patch('/:id', (req, res) => {
    const params = {fields: req.query, id: req.params.id};
  
    SetorController.patch(params)
    .then((resolve) => res.status(204).end())
    .catch((reject) => res.status(400).json({mensagem: reject.message}));
});

export default setorRouter;
