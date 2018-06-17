import { Application } from 'express';
import ExamplesRouter from './api/controllers/examples/ExamplesRouter';

export default function routes(app: Application): void {
  app.use('/api/v1/examples', ExamplesRouter);
}
