import { Router } from 'express';
import SetorController from '../controller/setor.js';

const setorRouter = Router();

setorRouter.get('/', (req, res) => {
    SetorController.get()
        .then((resolve) => res.json(resolve))
        .catch((reject) => res.status(400).json(reject));
});

setorRouter.get('/:id', (req, res) => {
    SetorController.get()
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json(reject));
  });

setorRouter.post('/', (req, res) => {
    SetorController.post(req.body)
        .then((resolve) => res.json(resolve))
        .catch((reject) => res.status(400).json(reject));
});

setorRouter.delete('/:id', (req, res) => {
    SetorController.delete(req.params.id)
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json(reject));
});
  
setorRouter.patch('/:id', (req, res) => {
    const params = {fields: req.query, id: req.params.id};
  
    SetorController.patch(params)
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json(reject));
});

export default setorRouter;
