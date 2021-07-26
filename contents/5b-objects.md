# Objects

In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Ruby code, `bike` would be an object (instance of the `Bike` class):

```ruby
bike = Bike.new
```

However, in Javascript, objects designate a different kind of values, which is very similar to Ruby hashes. Here's a Javascript object:

```javascript
let person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

```

An object is composed of *key-values* pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:
```javascript
let person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking'],
  speak: () => {
    console.log('Hello!');
  }
};
```

## Exercise: building an object

1. Create an object called `bankAccount` which has two properties: a `sortCode` and `accountNumber` (with any fake values that are strings).
2. Create a new array `transactions` which is an array of transaction string IDs.
3. Add a new property `bankAccount.transactions` which is set to the `transactions` array.
