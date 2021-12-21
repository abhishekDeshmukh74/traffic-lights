import { Request, Response, Router } from 'express';

import { trafficController } from './traffic.controller';

class TrafficRoutes {
  private router: Router = Router();

  get routes() {
    this.router.get(
      '/trafficSignalStart',
      // ensureAuthenticated,
      (req: Request, res: Response) => {
        trafficController.startTrafficSignal(req, res);
      },
    );

    return this.router;
  }
}

export const trafficRoutes = new TrafficRoutes();
