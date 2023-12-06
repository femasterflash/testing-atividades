import { IProduct } from "../interfaces/product.interfaces";

export let productDatabase: IProduct[]  = []; 

let id = 0;

export const generateId = () => {
    id++;
    return id;
}

export const resetDatabase = () => {
    productDatabase = [];
}