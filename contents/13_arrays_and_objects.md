# Arrays and objects

## Objectives

 * Use `map` to transform one array into a new one.
 * Access object properties.
 * Give a function as an argument to another function.

## Exercise - personalised messages 2.0

Let's go back to our candy promotion texts. Your friend now wants to have a specific discount percentage for each customer. After processing the list you're given, you end up with the following array:

```javascript
// An array of objects!
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];
```

To complete this exercise, you'll have to:
  * use Array's `map` method again.
  * access the properties of an object as seen above.

### Questions

1. Modify the function `generateMessages` so it uses this new structure and write the correct discount percentage in each message.

Once your function is written, you should be able to type the following code and have the exact same output:
```javascript
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

> generateMessages(namesAndDiscounts);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 40% off our best candies for you today!',
  'Hi Josh! 30% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 60% off our best candies for you today!'
]
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(item => {
    const name = item.name;
    const discount = item.discount;
    return `Hi ${name}! ${discount}% off our best candies for you today!`;
  });
}
```
</details>

## A world of functions

Note that we've used the functions `map` and `filter` by giving them other functions. Remember that in JavaScript, functions are considered as values in their own right, just like numbers, strings or arrays. Hence we can give functions to other functions.


[Next Challenge](14_search_function.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/13_arrays_and_objects.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/13_arrays_and_objects.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/13_arrays_and_objects.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/13_arrays_and_objects.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/13_arrays_and_objects.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
