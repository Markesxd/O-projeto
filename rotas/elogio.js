import {Router} from 'express';

const elogioRouter = Router();

elogioRouter.get('/', () => console.log('ba'));

elogioRouter.post('/', () => console.log('ba'));

elogioRouter.delete('/', () => console.log('ba'));

elogioRouter.patch('/', () => console.log('ba'));

export default elogioRouter;
