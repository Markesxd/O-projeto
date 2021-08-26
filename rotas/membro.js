import {Router} from 'express';
import MembroController from '../controller/membro.js';

const membroRouter = Router();

membroRouter.get('/', (req, res) => {
  MembroController.get()
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

membroRouter.post('/', (req, res) => {
  MembroController.post(req.body)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

membroRouter.delete('/', () => console.log('ba'));

membroRouter.patch('/', () => console.log('ba'));

export default membroRouter;
