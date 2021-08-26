import {Router} from 'express';

const eventoRouter = Router();

eventoRouter.get('/', () => console.log('ba'));

eventoRouter.post('/', () => console.log('ba'));

eventoRouter.delete('/', () => console.log('ba'));

eventoRouter.patch('/', () => console.log('ba'));

export default eventoRouter;
