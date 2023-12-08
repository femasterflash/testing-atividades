import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../__mocks__/prisma";
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock";

describe("Unit test: create product", () => {
    test("create product should work correctly", async () => {
        const productServices = new ProductServices();

        prismaMock.product.create.mockResolvedValue(productMock);
        const data = await productServices.create(productCreateBodyMock);

        expect(data).toBe(productMock);
    });
})