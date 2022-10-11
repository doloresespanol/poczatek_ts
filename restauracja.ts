class Restauracja{
    static id: number = 0;
    readonly name:string;
    private pizzaInOrder:string[]=[];
    private maxPizzasInOven:number = 10;
    protected Recipies:string[] = [];
    private _manager: string = "Jan";

    constructor(name:string){
        this.name=name;
        this.id=Restauracja.id++;
    }

    get manager(){
        return this._manager;
    }

    set manager(manager){
        this._manager = manager;
    }

    private isOvenFull():boolean{
        if(this.pizzaInOrder.length<=10){
            return true;
        }else{
            return false;
        }
    }

    public order(pizza:string):void{
        if(this.isOvenFull()==true){
            console.log("Piec pelny");
        }else{
            this.pizzaInOrder.push(pizza);
        }
    }
}

const dagrasso: Restauracja = new Restauracja('Dagrasso');
dagrasso.order("hawajska");
console.log(dagrasso.name);
dagrasso.manager = "Ola";
console.log(dagrasso.manager);
 
const pizzahut: Restauracja = new Restauracja("PizzaHut");
const dominium: Restauracja = new Restauracja("Dominium");
const rome: Restauracja = new Restauracja("Rome");
 
console.log(dominium);
console.log(rome.id);
console.log(pizzahut.id);
//dagrasso.isOvenFull();