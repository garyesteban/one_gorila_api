import UsuariosService from '../../services/usuarios.service';
import { Request, Response } from 'express';
import { IUsuarioModel } from '../../models/usuario';

export class Controller {
  all(req : Request, res: Response): void {
    UsuariosService.all()
      .then((usuarios : IUsuarioModel[]) => res.status(201).json(usuarios))
      .catch(error => res.json(error));
  }

  create(req: Request, res: Response): void {
    UsuariosService.create(req.body)
      .then((usuario : IUsuarioModel) =>res.status(201).json(usuario))
      .catch((error : any) => res.status(505).json(error));
  }
}
export default new Controller();
