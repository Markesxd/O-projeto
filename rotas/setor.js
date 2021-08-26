import {Router} from 'express';

const setorRouter = Router();

setorRouter.get('/', () => console.log('ba'));

setorRouter.post('/', () => console.log('ba'));

setorRouter.delete('/', () => console.log('ba'));

setorRouter.patch('/', () => console.log('ba'));

export default setorRouter;
