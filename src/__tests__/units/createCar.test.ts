import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: create car", () => {
  test("create car should work correctly", async () => {
    prismaMock.car.create.mockResolvedValue(carMock);
    const data = await CarServices.create(carCreateBodyMock);

    expect(data).toStrictEqual(carMock);
  });
});
