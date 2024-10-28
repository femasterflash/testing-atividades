import { prisma } from "../database/prisma";
import {
  TCar,
  TCarCreateBody,
  TCarUpdateBody,
  carSchema,
} from "../schemas/car.schemas";

export class CarServices {
  static async create(body: TCarCreateBody): Promise<TCar> {
    const newCar = await prisma.car.create({ data: body });

    return carSchema.parse(newCar);
  }

  static async getMany(): Promise<TCar[]> {
    const carList = await prisma.car.findMany();

    return carSchema.array().parse(carList);
  }

  static async getOne(carId: string): Promise<TCar> {
    const car = await prisma.car.findUnique({
      where: { id: carId },
    });

    return carSchema.parse(car);
  }

  static async update(body: TCarUpdateBody, carId: string): Promise<TCar> {
    const updateCar = await prisma.car.update({
      data: body,
      where: { id: carId },
    });

    return updateCar;
  }

  static async delete(carId: string): Promise<void> {
    await prisma.car.delete({
      where: { id: carId },
    });
  }
}
