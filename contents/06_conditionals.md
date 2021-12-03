# Conditionals

## Objectives

 * Use conditional statements (`if` / `else if` / `else`).

Conditionals work the same way as other languages, but we need:
  * Brackets `()` to enclose the condition.
  * Curly braces `{}` to enclose the code "body" executed following this condition.

See the following example:
```js
const a = 10;

if (a == 10) {
  // do things
} else {
  // do other things
}
```
## Exercise: a more complex function

To complete the following, you will have to:
 * use `if`, `else if` and `else` to write conditionals.
 * use the strict equality operator `===` to compare values.

1. Define a function `getNumberSign` that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:

```javascript
> getNumberSign(3);
'positive'

> getNumberSign(0);
'zero'

> getNumberSign(-5);
'negative'
```

*Note*: in all the following examples, we'll use the strict equality operator `===` (instead of `==`), as it can prevent some bugs, and is viewed as one of the best practices in the JavaScript community. In your code, you should ideally use `===` as well when doing comparisons (unless you have a good reason not to!).

<details>
<summary>Reveal solution</summary>

```javascript
const getNumberSign = (number) => {
  if (number === 0) { // we use '===' instead of '=='
    return 'zero';
  } else if (number > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}
```

</details>

## Exercise: code review

Someone from your team just asked you to review their code. In one of the JavaScript files, there is the following function:

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
```

1. What comment(s) would you make to improve this code, based on what you learned on the previous page?
2. When running the code, something doesn't work as expected. What fix can you suggest to solve the problem? You'll know the function works if you manage to have the expected output when running in `node`:

```javascript
> isValidLength('00');
false

> isValidLength('0011223344');
true
```


[Next Challenge](07_fizzbuzz_function.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/06_conditionals.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/06_conditionals.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/06_conditionals.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/06_conditionals.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/06_conditionals.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
