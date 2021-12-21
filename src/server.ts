import express, { Application, Router } from 'express';
import * as Sentry from '@sentry/node';
import 'module-alias/register';

import { ENVIRONMENT } from '@environment';
import { Middlewares } from './config/middlewares/app.middlewares';
import { BackendRoutes } from './config/routes';

class Server {

  public app: Application = express();
  public router: Router = Router();

  constructor() {
    this.configMiddleware();
    this.configRoutes();
    this.startServer();
  }

  private configMiddleware() {
    new Middlewares(this.app);
  }

  private configRoutes() {
    this.app.use('/api', this.router);
    new BackendRoutes(this.router);
    this.app.use(Sentry.Handlers.errorHandler());
  }

  private startServer() {
    this.app.set('port', process.env.PORT || ENVIRONMENT.PORT_VALUE);

    this.app.listen(
      this.app.get('port'),
      () => {
        console.log(`${ENVIRONMENT.ENVIRONMENT_NAME} server started on port ${this.app.get('port')}`);
      },
    );
  }
}

new Server();
