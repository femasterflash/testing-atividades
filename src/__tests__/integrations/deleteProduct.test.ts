import { prisma } from "../../database/prisma";
import { productCreateBodyMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: delete product", () => {
   test("should be able to delete a product successfully", async () => {
      const product = await prisma.product.create({ data: productCreateBodyMock });

      await request.delete(`/products/${product.id}`).expect(204);
   });

   test("should throw error when product is invalid", async () => {
    const data = await request
       .delete("/products/e24192c0-73e6-42c4-a1b6-ab864434635e")
       .expect(404)
       .then((response) => response.body);
       
    expect(data.message).toBe("Product not found.");
 });
});
