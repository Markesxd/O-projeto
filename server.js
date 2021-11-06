import express from 'express';
import router from './rotas/index.js';
import models from './model/index.js';
import cors from 'cors';

const port = process.env.PORT || 5000;

models();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,() => console.log(`server rodando na porta: ${port}`));
