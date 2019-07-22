import { Application } from 'express';
import usuariosRouter from './api/controllers/usuarios/router'
export default function routes(app: Application): void {
  app.use('/api/v1/usuarios', usuariosRouter);
};