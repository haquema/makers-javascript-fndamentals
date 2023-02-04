class ShoppingBasket {
  constructor() {
    this.basketValue = 0;
  }

  getTotalPrice() {
    return this.basketValue;
  }

  addItem(candy) {
    this.basketValue += candy.getPrice();
  }
}

module.exports = ShoppingBasket