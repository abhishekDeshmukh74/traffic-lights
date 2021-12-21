import { CONSTANTS } from '@constants';
import { Request, Response } from 'express';

import { handleException } from './../../config/error-handler';
import { startCountDown } from './traffic.helper';

class TrafficController {
  async startTrafficSignal(req: Request, res: Response) {
    try {
      let time = 0;
      let currentColor = CONSTANTS.TRAFFIC_SIGNAL_CONFIG[0].color;
      const colorSwitchNumsArr = [];

      // get color switch nums and store in memory
      for (const [index, config] of CONSTANTS.TRAFFIC_SIGNAL_CONFIG.entries()) {
        const colorSwitchNum = CONSTANTS.TRAFFIC_SIGNAL_CONFIG.slice(0, index + 1)
          .map((e) => e.interval)
          .reduce((a, b) => a + b, 0);

        colorSwitchNumsArr.push(colorSwitchNum);
      }

      const interval = setInterval(startCountDown(time, colorSwitchNumsArr, currentColor, res), 1000);

    } catch (e) {
      handleException('startTrafficSignal', e, res);
    }
  }
}

export const trafficController = new TrafficController();
