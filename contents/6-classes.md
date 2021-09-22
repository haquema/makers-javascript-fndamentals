# Classes

/** EDU
  This section skips entirely the fact that ES6 classes are syntax-sugar for JS constructors and prototypal inheritance. 
  And it's probably fine, this syntax has been around for a while, and they'll be able to discover by themselves how previous
  and new ways of writing classes tie together if they need to (maybe if they find some older code examples online).
  
  Explaining how prototypal inheritance works would likely add a lot of overhead that they don't require to write JS programs.
  We could potentially even give away by using just functions, which is why classes are introduced only now.
**/

Your friend's candies business is booming, and you're now working almost full time on the website — this is great! However, the more the features you implement, and the more code you add, the messier the project starts to feel. It might be time to tidy up things a bit.

So far we've used only JavaScript functions, but much like other languages that support object-oriented design, we can declare and use classes in JS to organise our code.

Classes in JS work in a similar way to other languages, they are declared with *methods* — and perhaps *attributes* — and can be instantiated when creating *instances*. By the end of this section, we'll write a few JavaScript classes that will allow us to execute code like this: 

```javascript
let candy = new Candy('Mars', 4.99);

let basket = new ShoppingBasket();
basket.addItem(candy);

let totalPrice = basket.getTotalPrice();
```

## Objectives

 * Declare a class.
 * Declare a method.
 * Create an instance of a class.
 * Call a method on an instance.
 * Make two classes interact together.
 * Test-drive a class using Jest.
 * Mock a class in unit tests.

## Exercise - a simple class

We would like to create a class to represent a user account. Here is how we should be able to use this class:

```javascript
> let user = new User('Uma');

> user.getName(); 
'Uma'

> user.getIntroduction();
'Hi, my name is Uma'
```

To complete this exercise, you will have to:
 * Learn how to declare a class and its methods. Having a look at the [Classes MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_declarations) is a good start.
 * Initialize an attribute within the [constructor special method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

### Questions

1. Write Jest tests in a file `user.test.js` so it verifies the criteria shown in the example code above.
2. Implement the `User` class in a file `user.js` so it passes those tests, and behave exactly like in the example code above.

You might now be wondering (rightly) what happens to our `module.exports` and `require`. We know how to export functions, but what about classes?  Well, it turns out classes can be exported the same way as functions! So we can write something like this:

```javascript
// In the user.js file...
module.exports = User;
```

```javascript
// ... and in the user.test.js file
const User = require('./user');
```

## Exercise - a class using a class

Given the following *array* of `User` instances (the class from the previous exercise):

```javascript
let users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
```

We'd now like to have a class `UserBase` that behaves like this:

```javascript
> let userBase = new UserBase(users);

> userBase.count();
3

> userBase.getNames();
[ 'Uma', 'Josh', 'Ollie' ]

> userBase.getIntroductions();
[
  'Hi, my name is Uma',
  'Hi, my name is Josh',
  'Hi, my name is Ollie'
]
```

To complete this exercise, you will have to:
 * declare a new class and its methods.
 * use what you've previous learned on working with arrays, like the `map` method.
 * call methods from the `User` class.

### Questions

1. Write Jest tests in a file `userBase.test.js` so it verifies the criteria shown in the example code above. You'll likely need to `require` the `User` class as well in this test file.
2. Implement the `UserBase` class in a file `userBase.js` so it passes those tests, and behave exactly like in the example code above.


## Exercise - a shopping basket

To complete this exercise, you'll have to:
  * use `npm init` and `npm install` to setup a project directory and install Jest.
  * write Jest tests cases for a class.
  * declare a class and its methods.
  * use [Jest mocks](https://jestjs.io/docs/es6-class-mocks#automatic-mock) to mock one class in unit tests.

We're going to test-drive and implement the two classes `Candy` and `ShoppingBasket` so we can execute the following code:

```javascript
> let candy = new Candy('Mars', 4.99);

> candy.getName();
'Mars'
> candy.getPrice();
4.99

> let basket = new ShoppingBasket();
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

### Questions:

1. Setup the project directory and install Jest.
2. Test-drive and implement the `Candy` class (test file should be `candy.test.js`).
3. Test-drive and implement the `ShoppingBasket` class (test file should be `shoppingBasket.test.js`).
4. Our class `ShoppingBasket` depends on the `Candy` class, we need to properly isolate it in our unit tests — [mock the `Candy` class](https://jestjs.io/docs/es6-class-mocks#automatic-mock) inside the test file `shoppingBasket.test.js`.

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


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/6-classes.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/6-classes.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/6-classes.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/6-classes.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/6-classes.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
