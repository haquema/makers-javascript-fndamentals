# Class interaction

## Objectives

 * Declare a class.
 * Declare a method.
 * Make two classes interact together.
 * Test-drive a class using Jest.

Like in other languages supporting classes, we can make objects of different classes interact together to build a complex program, by writing methods.

Note that **methods** are just like regular **functions**, but we can use `this` inside their code to refer to the current object — this is similar to `self` in Ruby.

## Exercise - a class using a class

Given the following *array* of `User` instances (the class from the previous exercise):

```javascript
const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
```

We'd now like to have a class `UserBase` that behaves like this:

```javascript
> const userBase = new UserBase(users);

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


[Next Challenge](20_shopping_basket.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/19_more_classes.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/19_more_classes.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/19_more_classes.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/19_more_classes.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/19_more_classes.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
