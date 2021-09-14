import {Router} from 'express';
import EventoController from '../controller/evento.js';

const eventoRouter = Router();

eventoRouter.get('/', (req, res) => {
    EventoController.get()
        .then((resolve) => res.json(resolve))
        .catch((reject) => res.status(400).json(reject));
});

eventoRouter.get('/:id', (req, res) => {
    EventoController.getOne(req.params.id)
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json({mensagem: reject.message}));
});

eventoRouter.post('/', (req, res) => {
    EventoController.post(req.body)
        .then((resolve) => res.status(201).json(resolve))
        .catch((reject) => res.status(reject.status).json({mensagem: reject.erro.message}));
});

eventoRouter.delete('/:id', (req, res) => {
    EventoController.delete(req.params.id)
    .then((resolve) => res.status(204).end())
    .catch((reject) => res.status(400).json({message: reject.message}));
});
  
eventoRouter.patch('/:id', (req, res) => {
    const params = {fields: req.query, id: req.params.id};
  
    EventoController.patch(params)
    .then((resolve) => res.status(204).end())
    .catch((reject) => res.status(400).json({message: reject.message}));
});

export default eventoRouter;
