import { Application } from 'express';
import WaistRoutes from './api/controllers/waist/WaistRoutes';

export default function routes(app: Application): void {
  app.use('/api/v1/waist', WaistRoutes);
}
