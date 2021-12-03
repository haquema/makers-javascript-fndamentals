# JavaScript classes

## Objectives

 * Declare a class.
 * Declare a method.
 * Create an instance of a class.
 * Call a method on an instance.
 * Test-drive a class using Jest.

<!-- OMITTED -->

Your friend's candies business is booming, and you're now working almost full time on the website — this is great! However, the more the features you implement, and the more code you add, the messier the project starts to feel. It might be time to tidy up things a bit.

So far we've used only JavaScript functions, but much like other languages that support object-oriented design, we can declare and use classes in JS to organise our code.

Classes in JS work in a similar way to other languages, they are declared with *methods* — and perhaps *attributes* — and can be instantiated when creating *instances*. By the end of this section, we'll write a few JavaScript classes that will allow us to execute code like this: 

```javascript
const candy = new Candy('Mars', 4.99);

const basket = new ShoppingBasket();
basket.addItem(candy);

const totalPrice = basket.getTotalPrice();
```

## Exercise - a simple class

We would like to create a class to represent a user account. Here is how we should be able to use this class:

```javascript
> const user = new User('Uma');

> user.getName(); 
'Uma'

> user.getIntroduction();
'Hi, my name is Uma'
```

To complete this exercise, you will have to:
 * Learn how to declare a class and its methods. Having a look at the [Classes MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_declarations) is a good start.
 * Initialise an attribute within the [constructor special method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

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

<details>
<summary>Reveal suggested solution</summary>

1. Contents of `user.js`:
```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;
```

2. Contents of `user.test.js`:
```javascript
const User = require('./user');

describe('User class', () => {
  it('gets name', () => {
    const user = new User('Uma');
    expect(user.getName()).toBe('Uma');
  });

  it('gets introduction', () => {
    const user = new User('Uma');
    expect(user.getIntroduction()).toBe('Hi, my name is Uma');
  });
});
```
</details>

## Additional resources

 * [Classes in JS](https://javascript.info/class)

[Next Challenge](19_more_classes.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/18_classes.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/18_classes.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/18_classes.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/18_classes.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/18_classes.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
