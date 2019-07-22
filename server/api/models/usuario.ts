import mongoose from 'mongoose';

interface IUsuario {
  name : string,
  email : string,
  n : number,
  m : number[],
  resultado : boolean
}

export interface IUsuarioModel extends IUsuario, mongoose.Document {}

const usuarioSchema = new mongoose.Schema({
  name : String,
  email : String,
  n : Number,
  m : [Number],
  resultado : Boolean
});
export const Usuario = mongoose.model<IUsuarioModel>('usuarios', usuarioSchema);