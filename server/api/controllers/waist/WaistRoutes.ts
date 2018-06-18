import * as express from 'express';
import WaistController from './WaistController';

export default express.Router()
  .post('/', WaistController.create)
  .get('/', WaistController.all)
  .get('/:id', WaistController.byId);
