import { Request, Response } from 'express';
import WaistService from '../../services/WaistService';

export class WaistController {
  all(req: Request, res: Response): void {
    WaistService.all().then(r => res.json(r));
  }

  byId(req: Request, res: Response): void {
    WaistService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    WaistService.create(req.body.value).then(r =>
      res
        .status(201)
        .location(`/api/v1/waist/${r.id}`)
        .json(r),
    );
  }
}

export default new WaistController();
