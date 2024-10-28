import { CarServices } from "../../services/car.services";
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: update car", () => {
  test("update car should work correctly", async () => {
    const newCarExpect = { ...carMock, ...carUpdateBodyMock };

    prismaMock.car.update.mockResolvedValue(newCarExpect);
    const data = await CarServices.update(carUpdateBodyMock, carMock.id);

    expect(data).toEqual(newCarExpect);
  });
});
