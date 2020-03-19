
describe('Pizza Restaurant should', () => {
  it('return Cheese Pizza when a Cheese Pizza type is ordered.', () => {
    let restaurant = new PizzaRestaurant();
    var pizza = restaurant.OrderPizza("Cheese");
    
    expect(pizza).to.be.an.instanceof(CheesePizza);
    expect(pizza.PizzaName).to.equal("Cheese Pizza");
  });

  it('return Mexican Pizza when a Mexican Pizza type is ordered.', () => {
    let restaurant = new PizzaRestaurant();
    var pizza = restaurant.OrderPizza("Mexican");
    
    expect(pizza).to.be.an.instanceof(MexicanPizza);
    expect(pizza.PizzaName).to.equal("Mexican Pizza");
  });
});
