# A shopping basket

## Objectives

 * Test-drive a program made of different classes, using Jest.
 * Mock a class in unit tests.

We're going to test-drive and implement the two classes `Candy` and `ShoppingBasket` so we can execute the following code:

```javascript
> const candy = new Candy('Mars', 4.99);

> candy.getName();
'Mars'
> candy.getPrice();
4.99

> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97
```

To complete this exercise, you'll have to:
  * use `npm init` and `npm install` to setup a project directory and install Jest.
  * write Jest tests cases for a class.
  * declare a class and its methods.
  * use a JS object as a "double" or mock.
  * [use `let` rather than `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) to make a variable able to change.

### A note about mocking

JavaScript is a dynamically typed language, which means we can create mocks using simple "placeholder" JS objects — similar to how doubles work in RSpec, for example.

If what we want from a mock is only to get a predictable return value from a method, then a simple JS  object can also act as a double or mock for something else — let's say, as an example, that we want to mock the native `String` class:

```js
const name = "James"; // a string
name.length(); // 5

// let's now mock .length()
// the following object has one property .name,
// which is just a function that returns 3

const nameDouble = { length: () => 3 };

// so we can call nameDouble.length()
// which means it's a drop-in replacement for "real" String object,
// *as long as we only want* to use .length() on it.
```

### Questions:

1. Setup the project directory and install Jest.
2. Test-drive and implement the `Candy` class (test file should be `candy.test.js`).
3. Test-drive and implement the `ShoppingBasket` class (test file should be `shoppingBasket.test.js`).
4. Our class `ShoppingBasket` depends on the `Candy` class (because it calls a method or property from this class). We need to properly isolate it in our unit tests — use a JS object as a "mock" as explained above.

## Exercise - debugging

Later, you're working to add a method `applyDiscount` to the class `ShoppingBasket` to apply a discount of a certain amount to the total price of the basket. However, something doesn't work — can you find the bug? (some of the code has been omitted for clarity)

```javascript
class ShoppingBasket {
  constructor() {
    this.discount = 0;
  }

  applyDiscount(discount) {
    discount = this.discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}
```

[Next Challenge](21_thermostat.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/20_shopping_basket.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/20_shopping_basket.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/20_shopping_basket.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/20_shopping_basket.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/20_shopping_basket.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
