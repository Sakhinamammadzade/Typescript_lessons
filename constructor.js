var Taxi1 = /** @class */ (function () {
    function Taxi1(location) {
        this.currentLocation = location;
    }
    Taxi1.prototype.travelTo = function (point) {
        console.log("Taksi x:".concat(point.x, "den ").concat(point.y, " adresine gedir"));
    };
    return Taxi1;
}());
var taxi_1 = new Taxi1({ x: 3, y: 5 });
Taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
console.log(Taxi_1.currentLocation.x);
console.log(Taxi_1.currentLocation.y);
