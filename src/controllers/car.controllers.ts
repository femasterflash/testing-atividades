import { Request, Response } from "express";
import { CarServices } from "../services/car.services";

export class CarControllers {
  static async create(req: Request, res: Response): Promise<Response> {
    const response = await CarServices.create(req.body);

    return res.status(201).json(response);
  }

  static async getMany(req: Request, res: Response): Promise<Response> {
    const response = await CarServices.getMany();

    return res.status(200).json(response);
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await CarServices.getOne(id);

    return res.status(200).json(response);
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await CarServices.update(req.body, id);

    return res.status(200).json(response);
  }

  static async delete(req: Request, res: Response): Promise<Response<void>> {
    const id = req.params.id;

    await CarServices.delete(id);

    return res.status(204).json();
  }
}
