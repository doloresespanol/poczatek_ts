class Restauracja{
    readonly name:string;
    private pizzaInOrder:string[]=[];
    private maxPizzasInOven:number = 10;
    protected Recipies:string[] = [];

    constructor(name:string){
        this.name=name;
    }

    public order(pizza:string):void{
        this.pizzaInOrder.push(pizza);
    }
    private isOvenFull():boolean{
        if(this.pizzaInOrder.length<=10){
            return true;
        }else{
            return false;
        }
    }
}

const dagrasso : Restauracja=new Restauracja("dagrasso");
dagrasso.order("Wiejska");
console.log(dagrasso.name);
//dagrasso.isOvenFull();