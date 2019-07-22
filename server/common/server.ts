import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import usuariosRouter from '../api/controllers/usuarios/router'
import { Db } from '../common/db';
import cors from 'cors';

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(`${root}/public`));
    app.use(cors());
    new Db();
  }

  router(routes: (app: Application) => void): ExpressServer {
    app.use('/api/v1/usuarios', usuariosRouter);
    return this;
  }

  listen(port : number): Application {
    console.log(`Api corriendo en el puerto ${port}`);
    http.createServer(app).listen(port);
    return app;
  }
}
