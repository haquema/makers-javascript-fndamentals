# JavaScript objects

## Objectives

 * Declare a JavaScript object.
 * Access object properties.

Let's talk about objects, which are a different kind of data. In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Ruby code, `bike` would be an object (instance of the `Bike` class):

```ruby
bike = Bike.new
```

However, in JavaScript, "object" usually refers to a type of value, similar to a Ruby hash. Here's an example of a JavaScript object:

```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

```

## Exercise: accessing object values

An object is composed of *key-values* pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:
```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};
```

1. Print the value of the `city` attribute ('London').
2. Print the value of the second `hobbies` value ('tennis').


[Next Challenge](13_arrays_and_objects.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/12_objects.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/12_objects.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/12_objects.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/12_objects.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/12_objects.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
