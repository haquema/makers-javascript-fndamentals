# Filter array elements

## Objectives

 * Iterate over an array.
 * Filter elements of an array.
 * Give a function as an argument to another function.

## Exercise - phone numbers

Your friend now wants to launch a special promotion. They give you a long list of phone numbers so you can create a small program to text everyone. You notice some lines in the file are not phone numbers, but some corrupted data:

```
1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)
```

However, you realise that most phone numbers on the list are no longer than 10 digits. Maybe you could just implement a JavaScript function to do the filtering for you! 

To complete this exercise you will have to:
 * create a function that checks if a phone number is too long.
 * use Array's [filter method](https://www.w3schools.com/jsref/jsref_filter.asp) to filter long numbers using this function.

### Questions

1. Declare a function `checkLength` that takes a phone number (**as a string**) as argument, and returns `true` if this phone number contains **10 characters or less**.
2. Now declare a function `filterLongNumbers` that takes an array of phone numbers. This function should return only numbers that contain *10 characters or less*. It should make use of the function `checkLength` written previously.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

> filterLongNumbers(numbers);
[ '1763687364', '4763687363', '7867867862' ]

> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
}

const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
}
```
</details>

## Additional resources

 * [Filter array elements using `filter` and a test function](https://www.javascripttutorial.net/javascript-array-filter/)

[Next Challenge](11_array_map.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_filter_array_elements.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_filter_array_elements.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_filter_array_elements.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_filter_array_elements.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_filter_array_elements.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
