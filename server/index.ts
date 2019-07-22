import Server from './common/server';
import routes from './routes';

const port = 3000;
export default new Server()
  .router(routes)
  .listen(port);
