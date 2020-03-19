interface Pizza{
    PizzaName: string;
}

class CheesePizza implements Pizza{

    PizzaName: string;

    constructor() {
        this.PizzaName = "Cheese Pizza";
    }
}

class MexicanPizza implements Pizza{

    PizzaName: string;

    constructor() {
        this.PizzaName = "Mexican Pizza";
    }
}

class PizzaRestaurant{
    OrderPizza(pizzaType: string): Pizza{
        if (pizzaType == "Cheese") {
            return new CheesePizza();
        }
        else if (pizzaType == "Mexican") {
            return new MexicanPizza();
        }
        else {
            throw new Error("Sorry, the pizza " + pizzaType + " you're looking for is not in the menu");
        }
    }
}

let restaurant = new PizzaRestaurant();
var pizza = restaurant.OrderPizza("Cheese");
console.log(pizza.PizzaName);
