# Moving Fizzbuzz into a class

## Goals

At the end of this frame, you should be able to:
 * Write a simple JS class.
 * Export and require a class.
 * Write a simple test for a method.

We now have a `fizzBuzz` function. What if we wanted to have a class instead?

## Intermezzo on classes

Remember that in Javascript a class can be written like this:

```javascript
class Alert {
  display(message) {
    console.log(`Alert: ${message}`);
  }
}
```

We would now create an instance of this class like this:
```javascript
let alert = new Alert();
alert.display('time to wake up!');
```

Try running both snippets of code above in `node`. Then try creating more instances of the `Alert` class and call the `display` method on them to display different messages.

## An Adder class

Remember our `add` function from the previous page?

```javascript
// add.js
let add = (a, b) => {
  return a + b;
}

module.exports = add;
```

We'll now try to replicate the same functionality, but this time using a class. Using what you know so far, work through the following steps:

> 1. In the same file `add.js`, replace the function `add` by a class named `Adder`. This class should have only one method called `add`, which will look a lot like the previous `add` function.
> 2. Modify the test file `add.test.js` to replace the usage of the function by the class `Adder`. Instead of calling the function directly, you'll have to create a new instance of `Adder` and call the `add` method on it.

You might now be wondering (rightly) what happens to our `module.exports` and `require`. We know how to export functions, but what about classes? 

Well, it turns out classes can be exported the same way as functions! So we can write something like this:

```javascript
// ... in the add.js file
module.exports = Adder;
```

```javascript
// ... and in the add.test.js file
let Adder = require('./add');
```

You should know be able to make the tests pass.

Here's a potential solution on how your file `add.js` could look like:

```javascript
class Adder {
  add(a, b) {
    return a + b;
  }
}

module.exports = Adder;
```

## Back to Fizzbuzz

```javascript
class Fizzbuzz {
  calculate(number) {
    // fill in this blank
  }
}
```

Now modify the test file `fizzbuzz.test.js` to reflect the change we made. Instead of calling directly the `fizzBuzz` function, we now have to create a new instance of this class and call the method `calculate`.