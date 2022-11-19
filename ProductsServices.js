"use strict";
exports.__esModule = true;
exports.ProductServices = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductServices = /** @class */ (function () {
    function ProductServices() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducs().forEach(function (element) {
            _this.products.push(element);
        });
    }
    ProductServices.prototype.getById = function (id) {
        return this.products.filter(function (x) { return x.id === id; })[0];
    };
    ProductServices.prototype.getProducts = function () {
        return this.products;
    };
    ProductServices.prototype.saveProducts = function (product) {
        if (product.id === 0 || product.id === null) {
            product.id = this.generateId();
            this.products.push(product);
            //yeni id yaradib product elave edirik
        }
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
            //product listin icinde varmi yoxmu onu yoxlayib save edirik -update
        }
    };
    ProductServices.prototype.deleteProducts = function (product) {
        var index = this.products.indexOf(product);
        if (index != 0) {
            this.products.splice(index, 1);
        }
    };
    ProductServices.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductServices;
}());
exports.ProductServices = ProductServices;
