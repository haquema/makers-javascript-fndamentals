const ShoppingBasket = require('./shoppingBasket');

describe("ShoppingBasket", () => {
  describe("upon initialisation", () => {
    it("has a total basket price of 0", () => {
      let basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toBe(0);
    });
  });

  describe("addItem()", () => {
    it("updates the basket price when a particular candy is added", () => {
      let candyDouble = { getPrice: () => 3.99 };
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      expect(basket.getTotalPrice()).toBe(3.99);
    });

    it("updates the basket price when a different candy is added", () => {
      let candyDouble = { getPrice: () => 4.99 };
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      expect(basket.getTotalPrice()).toBe(4.99);
    });

    it("updates the basket price when multiple candies are added", () => {
      let candyDouble = { getPrice: () => 7.99 };
      let candyDouble2 = { getPrice: () => 5.99 };
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      basket.addItem(candyDouble2);
      expect(basket.getTotalPrice()).toBe(13.98);
    });
  });
})