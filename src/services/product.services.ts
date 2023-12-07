import { generateId, productDatabase } from "../database/database";
import { IProduct, TCreateProductBody, TUpdateProductBody } from "../interfaces/product.interfaces";

export class ProductServices{
    create(body: TCreateProductBody): IProduct{
        const newProduct = { id: generateId(), ...body };

        productDatabase.push(newProduct);

        return newProduct;
    }
    
    getMany(): IProduct[]{
        return productDatabase;
    }

    update(body: TUpdateProductBody, updatingId: number): IProduct{
        const product = productDatabase.find(product => product.id === updatingId) as IProduct;

        const index = productDatabase.findIndex(product => product.id === updatingId);

        const updateProduct = { ...product, ...body};

        productDatabase.splice(index, 1, updateProduct);

        return updateProduct;
    }

    delete(removingId: number): void{
        const index = productDatabase.findIndex(product => product.id === removingId);

        productDatabase.splice(index, 1);
    }
}