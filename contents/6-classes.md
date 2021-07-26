# Classes

## Objectives

 * Declare a class.
 * Declare a method.
 * Create an instance of a class.
 * Call a method on an instance.
 * Test-drive a class using Jest.

## A simple class

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return 'Hello, my name is ';
  }
}

```
1. Will anything be printed on the screen if the code above is executed into `node`? Why?
2. Run the code and verify your assumptions.
3. Modify the class code so when creating a new person with the name "Patrick", the `speak` method returns "Hello, my name is Patrick".
4. Either in `node` or in a JS file, create a new instance of this class and call the method `speak` on it. 
5. Define a new method `shout` on the `Person` class. This method should return the same thing than the `speak` method, but in uppercase.
6. Create a new instance of `Person` and print the result of calling the `shout` method in the terminal.
7. Bonus one: implement `shout` so it is calling the method `speak`.

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

```javascript
class Adder {
  add(a, b) {
    return a + b;
  }
}

module.exports = Adder;
```

## Moving Fizzbuzz to a class

Remember our `fizzBuzz` function? What if we wanted to have a class instead?

Implement the class `Fizzbuzz`, which will have a single `calculate` method that computes the result of fizzbuzz.

Modify the test file `fizzbuzz.test.js` to reflect the change we made. Instead of calling directly the `fizzBuzz` function, we now have to create a new instance of this class and call the method `calculate`.