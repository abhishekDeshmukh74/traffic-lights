import { Response } from 'express';
import { CONSTANTS } from '@constants';

const floorNumber = CONSTANTS.TRAFFIC_SIGNAL_CONFIG.map((e) => e.interval).reduce(
  (a, b) => a + b,
  0
);

export const getModulatedNumber = (num: number) => {
  return num % floorNumber;
};

export const getColorSwitchNum = (index: number) =>
  CONSTANTS.TRAFFIC_SIGNAL_CONFIG.slice(0, index)
    .map((e) => e.interval)
    .reduce((a, b) => a + b, 0);

const stopInterval = () => {

};

export const startCountDown = (
  time: number,
  colorSwitchNumsArr: number[],
  currentColor: string,
  res: Response,
) => {
  return function () {
    const modTime = getModulatedNumber(time);

    if (modTime < CONSTANTS.TRAFFIC_SIGNAL_CONFIG[0].interval) {
      currentColor = CONSTANTS.TRAFFIC_SIGNAL_CONFIG[0].color;
    }

    if (colorSwitchNumsArr.includes(modTime)) {
      currentColor = CONSTANTS.TRAFFIC_SIGNAL_CONFIG[colorSwitchNumsArr.indexOf(modTime) + 1].color;
    }
    console.log('time:', time, 'color', currentColor);
    res.write(`${time}: ${currentColor}\n`);
    time++;

  };
};
