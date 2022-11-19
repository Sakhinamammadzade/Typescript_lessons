"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductsServices_1 = require("./ProductsServices");
var _productServices = new ProductsServices_1.ProductServices();
var product;
product = _productServices.getById(2);
console.log(product);
var newProduct = new Product_1.Product();
newProduct.name = "iphone-se",
    newProduct.category = "telefon";
newProduct.price = 1500;
newProduct.id = 6;
_productServices.saveProducts(newProduct);
var result = _productServices.getProducts();
_productServices.deleteProducts(product);
console.log(result);
