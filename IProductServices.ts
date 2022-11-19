import { Product } from "./Product";

 export interface IProductServices{
    getById(id:number):Product;
    getProducts():Array<Product>;
    saveProducts(product:Product ):void
    deleteProducts(product:Product):void
}