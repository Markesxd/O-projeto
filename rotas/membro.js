import {Router} from 'express';
import MembroController from '../controller/membro.js';

const membroRouter = Router();

membroRouter.get('/', (req, res) => {
  MembroController.get()
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

membroRouter.get('/:id', (req, res) => {
  MembroController.getOne(req.params.id)
  .then((resolve) => res.json(resolve))
  .catch((reject) => {res.status(400).json({mensagem: reject.message})});
});

membroRouter.post('/', (req, res) => {
  MembroController.post(req.body)
  .then((resolve) => res.status(201).json(resolve))
  .catch((reject) => res.status(reject.status).json({mensagem: reject.erro.message}));
});

membroRouter.delete('/:id', (req, res) => {
  MembroController.delete(req.params.id)
  .then((resolve) => res.status(204).end())
  .catch((reject) => res.status(400).json({message: reject.message}));
});

membroRouter.patch('/:id', (req, res) => {
  const params = {fields: req.query, id: req.params.id};

  MembroController.patch(params)
  .then((resolve) => res.status(204).end())
  .catch((reject) => res.status(400).json({mensagem: reject.message}));
});

export default membroRouter;
