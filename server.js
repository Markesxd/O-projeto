import express from 'express';
import router from './rotas/index.js';
import models from './model/index.js';

models();
const app = express();
app.use(express.json());
app.use(router);

app.listen(3333,() => console.log('server rodando com sucesso'));
