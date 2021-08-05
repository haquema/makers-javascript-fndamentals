# Classes

Your friend's candies business is booming, and you're know working almost full time on the website — this is great! However, the more the features you implement, and the more code you add, the messier the project starts to feel. It might be time to tidy up things a bit.

So far we've used only JavaScript functions, but much like other OOP languages, we can declare and use classes in JS to organise our code. Classes in JS work in a similar way to other languages, they are declared with methods — and perhaps attributes — and can be instantiated. By the end of this section, we'll write a few JavaScript classes that will allow us to execute code like this: 

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
 * Test-drive a class using Jest.

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










-------- BEGIN OLD --------

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return '';
  }
}

```
1. Will anything be printed on the screen if the code above is executed into `node`? Why?
2. Run the code and verify your assumptions.
3. The method `speak` returns an empty string. Modify the code so when creating a new person with the name "Patrick", the `speak` method returns "Hello, my name is Patrick".
4. Either in `node` or in a JS file, create a new instance of this class and call the method `speak` on it. 
5. Define a new method `shout` on the `Person` class. This method should return the same thing than the `speak` method, but in uppercase.
6. Create a new instance of `Person` and print the result of calling the `shout` method in the terminal.
7. Implement `shout` so it calls the method `speak`.

<details>
<summary>Reveal solution</summary>

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return 'Hello, my name is ' + this.name;
  }

  shout() {
    return this.speak().toUpperCase();
  }
}
```

</details>

## Test-driving an Adder class

Remember our `add` function from before?

```javascript
// add.js
let add = (a, b) => {
  return a + b;
}

module.exports = add;
```

We'll now try to replicate the same functionality, but this time using a class. Using what you know so far, work through the following steps:

1. In the same file `add.js`, replace the function `add` by a class named `Adder`. This class should have only one method called `add`, which will look a lot like the previous `add` function.
2. Modify the test file `add.test.js` to replace the usage of the function by the class `Adder`. Instead of calling the function directly, you'll have to create a new instance of `Adder` and call the `add` method on it.

You might now be wondering (rightly) what happens to our `module.exports` and `require`. We know how to export functions, but what about classes? 

Well, it turns out classes can be exported the same way as functions! So we can write something like this:

```javascript
// In the add.js file...
module.exports = Adder;
```

```javascript
// ... and in the add.test.js file
const Adder = require('./add');
```

You should now be able to make the tests pass.

Here's a potential solution on how your file `add.js` could look like:

<details>
<summary>Reveal solution</summary>

```javascript
// add.js

class Adder {
  add(a, b) {
    return a + b;
  }
}

module.exports = Adder;
```

```javascript
// add.test.js

const Adder = require('./add');

describe('Adder', () => {
  it('should add 2 and 2', () => {
    let adder = new Adder();
    expect(adder.add(2, 2)).toEqual(2);
  });
});
```

</details>

## Moving Fizzbuzz to a class

Remember our `fizzBuzz` function? What if we wanted to have a class instead? Implement the class `Fizzbuzz`, which will have a single method `calculate`, that computes the result of fizzbuzz.

Modify the test file `fizzbuzz.test.js` to reflect the change we made. Instead of calling directly the `fizzBuzz` function, we now have to create a new instance of this class and call the method `calculate`.