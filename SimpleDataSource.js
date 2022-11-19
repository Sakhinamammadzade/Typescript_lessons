"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung", 2000, "telefon"), new Product_1.Product(2, "Iphone", 3500, "telefon"), new Product_1.Product(3, "Soyuducu", 2500, "meiset"), new Product_1.Product(4, "Tozsoran", 1000, "meiset"), new Product_1.Product(5, "Hp g-14", 2000, "Computer"));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
//let p=new SimpleDataSource();bunu teyin etdiyimiz an yuxaridaki list constructor icindeki liste elave olunacaq
