import * as express from 'express';
import ExamplesController from './ExamplesController';

export default express.Router()
  .post('/', ExamplesController.create)
  .get('/', ExamplesController.all)
  .get('/:id', ExamplesController.byId);
