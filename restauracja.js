var Restauracja = /** @class */ (function () {
    function Restauracja(name) {
        this.pizzaInOrder = [];
        this.maxPizzasInOven = 10;
        this.Recipies = [];
        this.name = name;
    }
    Restauracja.prototype.order = function (pizza) {
        this.pizzaInOrder.push(pizza);
    };
    Restauracja.prototype.isOvenFull = function () {
        if (this.pizzaInOrder.length <= 10) {
            return true;
        }
        else {
            return false;
        }
    };
    return Restauracja;
}());
var dagrasso = new Restauracja("dagrasso");
dagrasso.order("Wiejska");
console.log(dagrasso.name);
//dagrasso.isOvenFull();
