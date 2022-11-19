var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi x:".concat(point.x, "den ").concat(point.y, " adresine gedir"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus x:".concat(point.x, "den ").concat(point.y, " adresine gedir"));
    };
    ;
    return Bus;
}());
var Taxi_1 = new Taxi();
Taxi_1.travelTo({ x: 1, y: 2 });
Taxi_1.currentLocation = ({ x: 2, y: 4 });
console.log(Taxi_1.currentLocation.x);
console.log(Taxi_1.currentLocation.y);
