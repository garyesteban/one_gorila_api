import mongoose from 'mongoose';
import { Promise } from 'bluebird';


export class Db {

  db : mongoose.Connection;
  
  constructor(){
    const mongoDb = 'mongodb://localhost:27017/one_gorilla';
    mongoose.connect(mongoDb, {useNewUrlParser: true});
    (<any>mongoose.Promise) = Promise;
    this.db = mongoose.connection;
    this.db.on('error', (error) => console.log(`error ${error}`));
  }
}
