import { prisma } from "../../database/prisma";
import { productCreateBodyMock, productUpdateBodyMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: update product", () => {
   test("should be able to update product successfully", async () => {
      const product = await prisma.product.create({ data: productCreateBodyMock });

      const data = await request
         .patch(`/products/${product.id}`)
         .send(productUpdateBodyMock)
         .expect(200)
         .then((response) => response.body);

      const newProduct = { ...product, ...productUpdateBodyMock };

      expect(data).toStrictEqual(newProduct);
   });

   test("should throw error when product is invalid", async () => {
      const data = await request
         .patch("/products/e24192c0-73e6-42c4-a1b6-ab864434635e")
         .expect(404)
         .then((response) => response.body);
         
      expect(data.message).toBe("Product not found.");
   });
});
