var Restauracja = /** @class */ (function () {
    function Restauracja(name) {
        this.pizzaInOrder = [];
        this.maxPizzasInOven = 10;
        this.Recipies = [];
        this._manager = "Jan";
        this.name = name;
        this.id = Restauracja.id++;
    }
    Object.defineProperty(Restauracja.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: false,
        configurable: true
    });
    Restauracja.prototype.isOvenFull = function () {
        if (this.pizzaInOrder.length <= 10) {
            return true;
        }
        else {
            return false;
        }
    };
    Restauracja.prototype.order = function (pizza) {
        if (this.isOvenFull() == true) {
            console.log("Piec pelny");
        }
        else {
            this.pizzaInOrder.push(pizza);
        }
    };
    Restauracja.id = 0;
    return Restauracja;
}());
var dagrasso = new Restauracja('Dagrasso');
dagrasso.order("hawajska");
console.log(dagrasso.name);
dagrasso.manager = "Ola";
console.log(dagrasso.manager);
var pizzahut = new Restauracja("PizzaHut");
var dominium = new Restauracja("Dominium");
var rome = new Restauracja("Rome");
console.log(dominium);
console.log(rome.id);
console.log(pizzahut.id);
//dagrasso.isOvenFull();
