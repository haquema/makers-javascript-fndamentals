class ShoppingBasket {
  constructor() {
    this.contents = []
  }

  getTotalPrice() {
    let sum = 0
    this.contents.forEach(item => {
      sum += item.getPrice();
    })
    return sum
  }

  addItem(itemToAdd) {
    this.contents.push(itemToAdd);
  }
}

module.exports = ShoppingBasket;