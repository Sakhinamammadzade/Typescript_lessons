import { Product } from "./Product";
import { ProductServices } from "./ProductsServices";


let _productServices=new ProductServices();

let product;


 product=_productServices.getById(2);
console.log(product);



let newProduct= new Product();
newProduct.name="iphone-se",
newProduct.category="telefon";
newProduct.price=1500;
newProduct.id=6;

_productServices.saveProducts(newProduct);
let result=_productServices.getProducts();

_productServices.deleteProducts(product)

console.log(result);


