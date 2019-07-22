import Promise from 'bluebird';
import { Usuario, IUsuarioModel } from '../models/usuario';

export class UsuariosService {

  all() : Promise<IUsuarioModel[]> {
    return new Promise((resolve, reject) => {
      Usuario.find()
        .then((usuarios : IUsuarioModel[]) => resolve(usuarios))
        .catch(error => reject(error));
    });
  }

  create(usuario : { name : string, email : string, n : number, m : number[], resultado : boolean }) : Promise<IUsuarioModel>{
    return new Promise((resolve, reject) => {
      const usuarioDoc = new Usuario({
        name : usuario.name,
        email : usuario.email,
        n : usuario.n,
        m : usuario.m,
        resultado : usuario.resultado
      });
      usuarioDoc.save()
        .then((usuario : IUsuarioModel) => resolve(usuario))
        .catch(error => reject(error));
    });
  }
}

export default new UsuariosService();