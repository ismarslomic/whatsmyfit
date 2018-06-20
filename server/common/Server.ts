import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
// tslint:disable-next-line:no-duplicate-imports
import { Application } from 'express';
import * as http from 'http';
import * as os from 'os';
import * as path from 'path';
import * as helmet from 'helmet';
import logger from './logger';
import swagger from './swagger';
import sslRedirect from './sslRedirect';

const app = express();

export default class Server {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(sslRedirect());
    app.use(helmet());
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): Server {
    swagger(app, routes);
    return this;
  }

  listen(port: number = Number(process.env.PORT)): Application {
    const welcome = port => () => logger.info(`up and running in ${process.env.NODE_ENV ||
    'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
