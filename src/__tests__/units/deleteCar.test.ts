import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: delete car", () => {
  test("delete car should work correctly", async () => {
    await CarServices.delete(carMock.id);
  });
});
