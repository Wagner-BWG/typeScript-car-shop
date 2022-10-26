import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  public async create(req: Request, res: Response<ICar>) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }
}

export default CarsController;