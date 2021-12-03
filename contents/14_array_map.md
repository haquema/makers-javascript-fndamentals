# `Map`ping new arrays

## Objectives

 * Iterate over an array.
 * Use `map` to transform one array into a new one
 * Give a function as an argument to another function.

### About the map method

In a similar fashion to other languages `map` functions, Array's `map` method is used to create a new array from an existing array, like this:

```javascript
const numbers = [1, 2, 3];

const squaredNumbers = numbers.map(num => {
  return num * num;
});

// squaredNumbers value is [1, 4, 9]
```

For each item in the first array `numbers`, the function given to `map` will be executed, and its return value (`num * num`) will be used to derive the value in the new array.

## Exercise - personalised messages

Your friend now would you like to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:

```javascript
> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
```

To complete this exercise you'll have to:
 * create a function that takes a single name and generate the correct message for it.
 * use [Array's map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to generate the list of personalised messages using this function.

### Questions

1. Write a function `generateMessages` that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string `'Hi Anna! 50% off our best candies for you today!'`, the second element the string `'Hi Laura! 50% off our best candies for you today!'`, and so on. 

Once your function is written, you should be able to type the following code and have the exact same output:
```javascript
> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

> generateMessages(names);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 50% off our best candies for you today!',
  'Hi Josh! 50% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 50% off our best candies for you today!'
]
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const generateMessages = (names) => {
  return names.map(name => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
}
```
</details>

## Additional resources

 * [Use `map` to iterate through array items and create a new array](https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know)

[Next Challenge](15_objects.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/14_array_map.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/14_array_map.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/14_array_map.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/14_array_map.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/14_array_map.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
