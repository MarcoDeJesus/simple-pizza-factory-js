"use strict";
class CheesePizza {
    constructor() {
        this.PizzaName = "Cheese Pizza";
    }
}
class MexicanPizza {
    constructor() {
        this.PizzaName = "Mexican Pizza";
    }
}
class PizzaRestaurant {
    OrderPizza(pizzaType) {
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
