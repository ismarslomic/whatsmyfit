// tslint:disable:no-increment-decrement

import * as Promise from 'bluebird';
import logger from '../../common/logger';

let id = 0;

enum MeasurementType {
  Waist = 'WAIST',
}

interface WaistMeasurement {
  id?: number;
  registered?: string;
  value: string;
  type?: MeasurementType.Waist;
}

const measurements: WaistMeasurement[] = [
  { id: id++, value: '90.5', registered: '2018-06-18', type: MeasurementType.Waist },
  { id: id++, value: '91.0', registered: '2018-06-18', type: MeasurementType.Waist },
];

export class WaistService {
  all(): Promise<WaistMeasurement[]> {
    logger.info(measurements, 'fetch all waist measurements');
    return Promise.resolve(measurements);
  }

  byId(id: number): Promise<WaistMeasurement> {
    logger.info(`fetch waist measurement with id ${id}`);
    return this.all().then(r => r[id]);
  }

  create(value: string): Promise<WaistMeasurement> {
    logger.info(`register waist measurement with value ${value}`);
    const measurement: WaistMeasurement = {
      value,
      registered: new Date().toISOString(),
      type: MeasurementType.Waist,
      id: id++,
    };
    measurements.push(measurement);
    return Promise.resolve(measurement);
  }
}

export default new WaistService();
