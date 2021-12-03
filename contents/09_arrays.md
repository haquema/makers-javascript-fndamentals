# Arrays

In this section we'll look at a concept you've previously used in another language, and how it can be used in JavaScript: *arrays*. We'll look at how to perform basic operations on arrays, but also more complex things that can be useful in our programs.

## Objectives

 * Declare an array in JS.
 * Add elements to an array.
 * Get the length of an array.

## Exercise - an array of numbers

You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as `1274`.

Your friend would like to create batches of *five* order IDs. They ask you if you could give a hand and write a small program to do this.

To complete this exercise you will have to find out:
 * how to [add elements to an array with the `.concat` method](https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/)
 * how to get the length of an array

### Questions

1. Declare a function `addToBatch` that takes two arguments, an *array* and *a number*, and returns a *new array* by adding the number to the array.
2. Now, make sure this function *does not* add the number *if the array's length is already greater than 5* — it should just return the array untouched in that case.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> addToBatch([1], 3); 
[ 1, 3 ]

> addToBatch([1, 2, 3], 4); 
[ 1, 2, 3, 4 ]

> addToBatch([], 8); 
[ 8 ]

> addToBatch([1, 2, 3, 4, 5, 6], 7); 
[ 1, 2, 3, 4, 5, 6 ]
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const addToBatch = (array, number) => {
  if (array.length > 5) {
    return array;
  }

  return array.concat(number);
}
```

</details>

## Additional resources

 * [Array's `concat` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

[Next Challenge](10_filter_array_elements.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/09_arrays.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/09_arrays.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/09_arrays.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/09_arrays.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/09_arrays.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
