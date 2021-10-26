# Arrays

In this section we'll look at a concept you've previously used in another language, and how it can be used in JavaScript: *arrays*. Arrays are useful because they can represent lists of various things — names, prices, products, users — and are used in almost every application in some way.

We'll look at how to perform basic operations on arrays, but also more complex things that can be useful in the real world.

## Objectives

 * Declare an array in JS.
 * Add elements to an array.
 * Get the length of an array.
 * Iterate over an array.
 * Filter elements of an array.
 * Execute code for each element of an array.
 * Give a function as an argument to another function.

## Exercise - an array of numbers

You are helping your friend, who owns a candies business, with their ecommerce website. Every order placed on the website is assigned with an order ID, such as `1274`.

Your friend would like to create batches of five order IDs to make the processing of deliveries simpler, rather than handling IDs one by one. They ask you if you could give a hand and write a small program to do this.

To complete this exercise you will have to find out:
 * how to add elements to an array
 * how to get the length of an array

### Questions

1. Declare a function `addToBatch` that takes two arguments, an *array* and *a number*, and returns a *new array* by adding the number to the array — the original array passed in argument should left untouched.
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

## Exercise - phone numbers

Your friend now wants to launch a special promotion for a given list of loyal customers, and send an SMS to that list. They give you a long list of phone numbers so you can create a small program to text them about that promotion. However, when running the first version of your program, you notice something is not quite right: some lines in the file are not phone numbers, but some corrupted data:

```
1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)
```

You're feeling puzzled. You don't want to ask your friend to filter out all those bad lines by themselves, and you certainly don't have the time to do it yourself! 

You realise that most phone numbers on the list are no longer than 10 digits. Maybe you could just implement a JavaScript function to do the filtering for you! 

To complete this exercise you will have to:
 * create a function that checks if a phone number is too long.
 * use Array's [filter method](https://www.w3schools.com/jsref/jsref_filter.asp) to filter long numbers using this function.

### Questions

1. Declare a function `checkLength` that takes a phone number (as a string) as argument, and returns `true` if this phone number contains *10 characters or less*.
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

2. Bonus: modify `filterLongNumbers` so it accepts a second argument, which is the maximum length to allow for phone numbers (we currently hardcoded this at 10).

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

## Exercise - personalised messages 2.0

Your friend now wants to have a specific discount percentage for each customer (and yes, they're asking a lot from you!). After processing the list you're being given, you end up with the following array:

```javascript
// yes, it's an array of smaller arrays!
> const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];
```

To complete this exercise, you'll have to:
  * find out how to access specific elements in an array (in this case, the first and second).

### Questions

1. Modify the function `generateMessages` so it uses this new structure and write the correct discount percentage in each message.

Once your function is written, you should be able to type the following code and have the exact same output:
```javascript
> const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
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

## A world of functions

You might have written some code similar to this in the previous exercises:

```javascript
const isLengthValid = (number) => {
  return number.length <= 10;
}

numbers.filter(isLengthValid);
```

The `filter` function will call `isLengthValid` for each phone number in the array `numbers`. You can notice `isLengthValid` is a function, but so is `filter` - we've given one function as an argument to another function.

In JavaScript, this concept is very powerful - you might read about it in the terms of "higher-order functions". A *higher-order function* is a function that, like `filter`, `map` or `forEach`, takes another function in its arguments in order to do its work.

Remember that in JavaScript, functions are considered as values of their own kind, like numbers, strings or arrays. Hence we can give functions to other functions.

## Exercise - a search engine for candies

Proud of the work you've accomplished so far, you suddenly get a new idea for your friend's website. What if people could search for candies on the website, instead of spending ages browsing for what they want? Excited by that idea, your friend — slightly surprised you're asking for *even more* work —  asks if you could implement this right away!

Given the following array (you can paste it directly into `node` — it's a long array!):
```javascript
const candies = [['Aero', 1.99], ['Skitties', 2.99], ['Maltesers', 3.49], ['Mars', 1.49], ['Skittles', 1.49], ['Starburst', 5.99], ['Ricola', 1.99], ['Polkagris', 5.99], ['Pastila', 4.99], ['Mentos', 8.99], ['Raffaello', 7.99], ['Gummi bears', 10.99], ['Fraise Tagada', 5.99]];
```

You can notice the shape is similar to what you've worked with before — an array of smaller arrays, whose first element is the candy name, and the second element is the price.

### Questions

To complete this question, you will use most of the things you've learned in this section:
  * The `filter` and `map` functions.
  * How to access a specific element of an array.
  * You might also need to find out how to verify whether a string is the prefix for another string!

1. Implement a function `searchCandies` that takes the following two arguments: a search string and a maximum price — and returns only the *names* of candies matching these criteria:
    * the candy name *starts by* the search string
    * the candy price is less than the maximum price

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> searchCandies('Ma', 10);
[ 'Mars', 'Maltesers' ]

> searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
[ 'Mars' ]

> searchCandies('S', 10); 
[ 'Skitties', 'Skittles', 'Starburst' ]

> searchCandies('S', 4); 
[ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4
```

2. Modify the function so it works if the search prefix is given in lowercase too:
```javascript
> searchCandies('ma', 10);
[ 'Mars', 'Maltesers' ]
```

### A note on scope

You'll note that we didn't have to pass the list of `candies` as an argument to the function. That's because we've declared this variable before creating the function, so the code inside our function is able to "see" this variable from the outside. Also, because we've declared this variable as `const`, there is no risk for our `searchCandies` function to modify it.

## Exercise - finding the bug

Several weeks later, you are now mentoring a junior developer who's just learning how to manipulate arrays in JS, just like you did. They're trying to write the code to filter only *even numbers* from a list of numbers. However, when they run their code, something is not working — can you help them?

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  number % 2 == 0;
}

const evenNumbers = filter(isEvenNumber(numbers));
```

### Questions

1. Run the code yourself. What is the issue with the way the list of numbers is filtered? You can double check how to call `filter` on an array if that helps.
2. Can you spot the bug(s) with this code? Make the fix so it runs as expected.

[Next Challenge](05_testing_with_jest.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_arrays.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_arrays.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_arrays.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_arrays.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_arrays.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
