# Build a small testing library in JavaScript

So far you've probably used at least one or two testing libraries, such as Jest in
JavaScript, or RSpec in Ruby, etc. At a high-level, those libraries are used for the same
thing: allowing you to test that the code is behaving correctly.

## Setup

1. Let's consider this function, written in the file `greetNames.js`:

```js
const greetNames = (names) => {
  if (names.length == 0) {
    return 'Nobody to greet!';
  } else {
    return 'Hi ' + names.join(', ') + '!';
  }
}
```

2. In a new file `expectEqual.js`, write the function `expectEqual` that takes two arguments. It should return `true` if
   those two arguments are equal (use the `===` operator).

3. Create a file `index.js` in which you require both `greetNames` and `expectEqual`.
   Using those two functions, write the code so it checks for two test cases:
     * `greetNames` is called with an empty array and should return the expected result.
     * `greetNames` is called with an array such as `['Dana', 'Conor', 'Claire']` and should return the expected result.
   If one of those tests is not "green", write an error message to the console.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/build-testing-library/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/build-testing-library/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/build-testing-library/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/build-testing-library/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/build-testing-library/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
