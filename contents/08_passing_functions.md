# Passing functions to other functions

## Objectives

 * Understand how functions can be given as arguments to other functions, just like regular values.
 * Apply this to give one function in argument to another function.


<!-- OMITTED -->

In JavaScript, functions are "values" like others — numbers, strings, etc. So we can pass a function to another one. Let's see one example:

```js
const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

// this function accepts a message, and another function
// it then calls this function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("hello", uppercaseMessage);
```

## Exercise

You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. To complete this exercise, you'll have to pass a function *as an argument* to another function.

1. Declare a function `notifyByEmail` that accepts an email address as argument and returns the string `'Email sent to: <EMAIL>'`.
2. Declare a function `notifyByText` that accepts a phone number (as a string) as argument and returns the string `'Text sent to: <PHONE NUMBER>'`.
3. Now declare a generic function `notify` that accepts a first string argument (either an email or a phone), and *the function to use* in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
4. Use the function `notify` with the two previous functions to:
    * send an email to `hello@makers.tech.test` and get the expected output.
    * send a text to `+10000000000` and get the expected output.

<details>
<summary>Reveal suggested solution</summary>

```javascript
const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
```
</details>



[Next Challenge](09_testing_with_jest.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08_passing_functions.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08_passing_functions.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08_passing_functions.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08_passing_functions.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08_passing_functions.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
