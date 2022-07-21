import { instance } from "./instance";
import Products from "../model/products";

export const getAll = () => {
    return instance.get('/products')
};

export const get = (id: number) => {
    return instance.get(`/products/${id}`);
};

export const add = (product: Products) => {
    return instance.post('/products/', product);
};

export const update = (product: Products) => {
    return instance.put(`/products/${product.id}`, product)
};